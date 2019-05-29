const express = require('express');
var request = require('request')
const router = express.Router({
    mergeParams: true
});
const Order = require('../models/Order')

router.post('/new', (req, res, next) => {
    let order = req.body
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

router.post('/refund/:id', (req, res, next => {
    let id = req.params.id
    Order.findById(id, (err, doc) => {
        if (err) return res.status(404).json({
            msg: `Unable to find order with id: ${id}`
        })
        else {
            let payment_id = doc.payment_id
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
}))