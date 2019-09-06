const express = require("express");
const router = express.Router();

const QuoteStorage = require('../storage/quote_storage.js/index.js')


router.get('/', (req, res) => {
    QuoteStorage.findAll()
        .then((data) => {
            res.locals.returnStatus(res, 200, data)
        })
        .catch((err) => {
            res.locals.returnStatus(res, 400, err)
        })
})

router.get('/:id', (req, res) => {
    QuoteStorage.findById(req.params.id)
        .then((data) => {
            res.locals.returnStatus(res, 200, data)
        })
        .catch((err) => {
            res.locals.returnStatus(res, 400, err)
        })
})

router.post('/', (req, res) => {
    QuoteStorage.create(req.body)
        .then(() => {
            res.locals.returnStatus(res, 200)
        })
        .catch((err) => {
            res.locals.returnStatus(res, 400, err)
        })
})

router.put('/:id', (req, res) => {
    QuoteStorage.update({ _id: req.params.id })
        .then((data) => {
            res.locals.returnStatus(res, 200, data)
        })
        .catch((err) => {
            res.locals.returnStatus(res, 400, err)
        })
})

req.delete('/:id', (req, res) => {
    QuoteStorage.delete(req.params.id)
        .then(() => res.locals.returnStatus(res, 200))
        .catch((err) => res.locals.returnStatus(res, 400, err))
})

module.exports = router;