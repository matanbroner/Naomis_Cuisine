const express = require('express');
const router = express.Router({mergeParams: true});
const Menu = require('../models/Menu')

// ADD A NEW MENU IN DB
router.post('/new', (req, res, next) => {
    let menu = req.body
    let newMenu = new Menu(menu)
    newMenu.save(err => {
        if (err) return res.status(404).json({
            msg: 'Error saving new menu.'
        })
        else res.status(200).json({
            msg: 'New menu saved.'
        })
    })
})

// MODIFY A MENU IN DB
router.post('/modify/:id', (req, res, next) => {
    let id = req.query.id
    Menu.find({
        _id: id
    }, (err, doc) => {
        if (err) return res.status(404).json({
            msg: `Error finding menu to edit with id: ${id}`
        })
        else {
            let keys = Object.keys(req.body)
            keys.forEach(key => {
                doc[key] = req.body[key]
            })
            doc.save(err => {
                if (err) return res.status(404).json({
                    msg: `Error saving edits to menu with id: ${id}`
                })
                else return res.status(200).json({
                    msg: `Succesfully edited menu with id: ${id}`
                })
            })
        }
    })
})

// DELETE A MENU IN DB
router.post('/delete/:id', (req, res, next) => {
    let id = req.query.id
    Menu.findByIdAndRemove(id, (err, offer) => {
        if (err) return res.status(404).json({msg: `Error deleting menu with id: ${id}`})
        else return res.status(200).json({msg: `Succesfully deleted menu with id: ${id}`})
    })
})

module.exports = router