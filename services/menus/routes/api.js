const express = require("express")
const router = express.Router()

router.use('/menus', require('./menus'));
router.use('/items', require('./items'));
router.use('/mock', require('./mock'));

router.get('/hello', (req, res) => {
    res.status(200).json({msg: 'hello'})
})


module.exports = router