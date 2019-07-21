const express = require('express');
const request = require('request')
const router = express.Router({
    mergeParams: true
});
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.ENCRYPT_KEY);
const Order = require('../models/Order')

router.get('/:id', (req, res) => {
    let id = req.params.id
    Order.findById(id, (err, doc) => {
        if (err) return res.status(404).json({
            msg: `Error finding order with id: ${id}`
        })
        else if (!doc) return res.status(404).json({
            msg: `No order found with id: ${id}`
        })
        else return res.status(200).send(doc)
    })
})

router.post('/new', (req, res, next) => {
    let order = req.body
    order.payment_id = cryptr.encrypt(order.payment_id)
    let newOrder = new Order(order)
    newOrder.save(err => {
        if (err) return res.status(404).json({
            msg: 'Unable to save new order.'
        })
        else return res.status(200).json({
            msg: `Order created with id: ${newOrder._id}`
        })
    })
})

router.get('/collection', (req, res, next) => {
    let start = req.body.start_date
    let end = req.body.end_date
    Order.find({
        "order_date": {
            "$gte": start,
            "$lt": end
        }
    }, (err, docs) => {
        if (err) return res.status(404).json({
            msg: 'Error searching for orders in given timeframe.'
        })
        else return res.status(200).send(docs)
    })
})

router.post('/refund/:id', (req, res, next) => {
    let id = req.params.id
    Order.findById(id, (err, doc) => {
        if (err) return res.status(404).json({
            msg: `Unable to find order with id: ${id}`
        })
        else {
            let payment_id = cryptr.decrypt(doc.payment_id)
            request({
                headers: {
                    'Authorization': process.env.PAYPAL_AUTH_TOKEN,
                    'Content-Type': 'application/json'
                },
                uri: `https://api.sandbox.paypal.com/v1/payments/sale/${payment_id}/refund`,
                method: 'POST'
            }, function (error, response, body) {
                if (error) return res.status(404).json({
                    msg: `Unable to refund order with id: ${id}`
                })
                else {
                    console.log(response)
                    doc.refunded = true
                    doc.save(err => {
                        if (err) return res.status(404).json({
                            msg: `Completed order refund but cannot save changes to order with id: ${id}`
                        })
                        else return res.status(200).json({
                            msg: `Completed full refund of order with id: ${id}`
                        })
                    })
                }
            })
        }
    })
})

module.exports = router