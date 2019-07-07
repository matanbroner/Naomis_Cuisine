const express = require('express');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid/v4')
const router = express.Router({
    mergeParams: true
});
const Item = require('../models/Item')
// const authenticate = require('./auth')


AWS.config.update({
    accessKeyId: process.env.DO_SPACE_ACCESS_KEY_ID,
    secretAccessKey: process.env.DO_SPACE_ACCESS_KEY,
});

const spacesEndpoint = new AWS.Endpoint(process.env.DO_ENDPOINT);
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
});

const upload = multer({
    storage: multerS3({
        s3,
        bucket: function (req, file, cb) {
            const bucketName = `${process.env.DO_SPACE_NAME}/` + req.params.id
            cb(null, bucketName)
        },
        acl: 'public-read',
        // eslint-disable-next-line
        key: function (req, file, cb) {
            let fileId = uuid()
            cb(null, fileId);
        },
    }),
}).array('upload', 50);

// ACCESS ITEM OBJECT IN DATABASE
router.get('/:id', (req, res, next) => {
    let id = req.query.id
    Item.find({
        _id: id
    }, (err, doc) => {
        if (err) return res.status(404).json({
            msg: `Error searching for item with id: ${id}`
        })
        else if (!doc) return res.send({})
        else return res.send(doc)
    })
})

// CREATE A NEW ITEM (NOT PHOTOS)
router.post('/new', (req, res, next) => {
    let item = req.body
    let newItem = new Item(item)
    newItem.save(err => {
        if (err) return res.status(404).json({
            msg: 'Error saving new.'
        })
        else res.status(200).json({
            msg: 'New item saved.'
        })
    })
})

// MODIFY A ITEM IN DB (NOT PHOTOS)
router.post('/modify/:id', (req, res, next) => {
    let id = req.query.id
    Item.find({
        _id: id
    }, (err, doc) => {
        if (err) return res.status(404).json({
            msg: `Error finding item to edit with id: ${id}`
        })
        else {
            let keys = Object.keys(req.body)
            keys.forEach(key => {
                doc[key] = req.body[key]
            })
            doc.save(err => {
                if (err) return res.status(404).json({
                    msg: `Error saving edits to item with id: ${id}`
                })
                else return res.status(200).json({
                    msg: `Succesfully edit item with id: ${id}`
                })
            })
        }
    })
})

// DELETE AN ITEM IN DB AND ALL PHOTOS
router.post('/delete/:id', (req, res, next) => {

    authenticate(req, res, (r) => {
        if (!r)
            res.status(404).json({
                msg: 'Invalid or no authorization was provided, action denied.'
            })
    })

    let keys = []
    let params = {
        Bucket: process.env.DO_SPACE_NAME,
        Prefix: `${req.params.id}/`
    }
    s3.listObjectsV2(params, function (err, data) {
        if (err)
            return res.status(404)
        data.Contents.forEach(obj => {
            keys.push({
                Key: obj.Key
            })
        })

        let Delete = {
            Objects: keys
        }
        let deleteParams = {
            Bucket: process.env.DO_SPACE_NAME,
            Delete: Delete
        }
        s3.deleteObjects(deleteParams, function (err, data) {
            if (!err) {
                Item.findByIdAndRemove(req.params.id, err => {
                    if (err)
                        return res.status(404)
                })
            } else {
                return res.status(404); // an error ocurred
            }
        });

    })
    return res.status(200).json({
        msg: "Item and all photos were deleted."
    })
})


// GET ALL PHOTO LINKS FOR A PROJECT
router.get('/photos/get/:id', (req, res, next) => {
    var params = {
        Bucket: process.env.DO_SPACE_NAME,
    };

    let photos = []
    let url = process.env.DO_EDGE_URL
    s3.listObjectsV2(params, function (err, data) {
        if (err)
            return res.status(404).json({
                errors: err
            })
        data.Contents.forEach(obj => {
            if (obj.Key.startsWith(req.params.id))
                photos.push({
                    key: obj.Key,
                    url: url + obj.Key
                })
        })
        res.json(photos)
    })
})

// ADD PHOTOS TO AN ITEM
router.post('/photos/add/:id', (req, res, next) => {
    authenticate(req, res, (r) => {
        if (!r)
            res.status(404).json({
                msg: 'Invalid or no authorization was provided, action denied.'
            })
        else {
            upload(req, res, err => {
                if (err) {
                    return res.status(404).json({
                        msg: err
                    });
                } else return res.status(200).json({
                    msg: "Upload succesful."
                })
            })
        }
    })
})

// REMOVE PHOTOS FROM AN ITEM
router.post('/photos/delete/:id', (req, res, next) => {

    authenticate(req, res, (r) => {
        if (!r)
            res.status(404).json({
                msg: 'Invalid or no authorization was provided, action denied.'
            })
    })

    let keys = req.body.keys
    let Delete = {
        Objects: keys.map(key => {
            return {
                Key: key
            }
        })
    }
    let deleteParams = {
        Bucket: process.env.DO_SPACE_NAME,
        Delete: Delete
    }
    s3.deleteObjects(deleteParams, function (err, data) {
        if (!err) {
            res.status(200).json(data); // sucessfull response
        } else {
            res.status(404); // an error ocurred
        }
    });

})

module.exports = router