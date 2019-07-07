const express = require("express")
const router = express.Router()

router.use('/schedule', require('./schedule'));
router.use('/menu', require('./menus'));
router.use('/item', require('./items'));
router.use('/mock', require('./mock'));


module.exports = router