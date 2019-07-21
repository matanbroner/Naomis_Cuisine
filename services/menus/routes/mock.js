
const express = require('express');
const router = express.Router({mergeParams: true});
const Menu = require('../models/Menu')

router.post('/seed', (req, res, next) => {
    const Item = {
        name: {
            heb: 'Pie',
            eng: 'Uga'
        },
        description: {
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
   
})

module.exports = router