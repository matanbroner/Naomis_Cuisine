const express = require('express');
const router = express.Router({mergeParams: true});
const Schedule = require('../models/Schedule')

// ADD A NEW MENU IN DB
router.post('/new', (req, res, next) => {
    let schedule = req.body
    let newSchedule = new Schedule(schedule)
    newSchedule.save(err => {
        if (err) return res.status(404).json({
            msg: 'Error saving new schedule.'
        })
        else res.status(200).json({
            msg: 'New schedule saved.'
        })
    })
})

// MODIFY A MENU IN DB
router.post('/modify/:id', (req, res, next) => {
    let id = req.query.id
    Schedule.find({
        _id: id
    }, (err, doc) => {
        if (err) return res.status(404).json({
            msg: `Error finding schedule to edit with id: ${id}`
        })
        else {
            let keys = Object.keys(req.body)
            keys.forEach(key => {
                doc[key] = req.body[key]
            })
            doc.save(err => {
                if (err) return res.status(404).json({
                    msg: `Error saving edits to schedule with id: ${id}`
                })
                else return res.status(200).json({
                    msg: `Succesfully edited schedule with id: ${id}`
                })
            })
        }
    })
})

// DELETE A MENU IN DB
router.post('/delete/:id', (req, res, next) => {
    let id = req.query.id
    Menu.findByIdAndRemove(id, (err, offer) => {
        if (err) return res.status(404).json({msg: `Error deleting schedule with id: ${id}`})
        else return res.status(200).json({msg: `Succesfully deleted schedule with id: ${id}`})
    })
})

module.exports = router