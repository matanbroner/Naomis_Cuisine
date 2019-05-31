const express = require("express")
const router = express.Router()

router.use('/order/', require('./orders'));
