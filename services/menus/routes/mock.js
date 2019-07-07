
const express = require('express');
const router = express.Router({mergeParams: true});
const Menu = require('../models/Menu')
const Schedule = require('../models/Schedule')

router.post('/seed', (req, res, next) => {
    const Item = {
        names: {
            heb: 'Pie',
            eng: 'Uga'
        },
        descriptions: {
            heb: 'Great',
            eng: 'Amazing'
        },
        price: 12,
        serves: 3,
        photos: '123photo',
        coverPhoto: 'https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png'
    }
    const menu = new Menu({
        items: [Item]
    })
    const schedule = new Schedule({
        days: {
            m: menu,
            t: menu,
            
        }
    })
    schedule.save(err => {
        if (err) res.status(404).json({msg: 'Error seeding schedule.'})
        else res.status(200).json({msg: 'Succesfully seeded schedule!'})
    })
})

module.exports = router