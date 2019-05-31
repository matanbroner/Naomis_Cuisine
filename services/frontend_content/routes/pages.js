const express = require("express")
const router = express.Router()
const Page = require('../models/Page')

router.get('/:name', (req, res, next) => {
    let {
        name
    } = req.params

    Page.findOne({
        page_name: name
    }).lean().
    then(page => res.status(200).json({
        page
    })).
    catch(error => res.status(404).json({
        msg: `Error fetching content for page named: ${name}`
    }));
})

router.post('/create', (req, res, next) => {
    let newPage = new Page(req.body)
    newPage.save(err => {
        if (err) res.status(404).json({
            msg: `Error creating new page with name: ${newPage.page_name}`
        })
        else res.status(200).json({
            msg: `New page created with name: ${newPage.page_name}`
        })
    })
})

router.post('/modify/:name', (req, res, next) => {
    let {
        name
    } = req.params
    Page.findOne({
        page_name: name
    }, (err, doc) => {
        if (err) return res.status(404).json({
            msg: `Error fetching content for page named: ${name}`
        })
        else {
            let keys = Object.keys(req.body)
            keys.forEach(key => {
                doc[key] = req.body[key]
            })
            doc.save(err => {
                if (err) return res.status(404).json({
                    msg: `Error editing content for page named: ${name}`
                })
                else return res.status(200).json({
                    msg: `Edited content successfully for page named: ${name}`
                })
            })
        }
    })
})