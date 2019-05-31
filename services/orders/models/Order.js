
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    customer_id: {
        type: String
    },
    payment_id: {
        type: String
    },
    associated_items: [
        {
            type: String
        }
    ],
    order_total: {
        type: Number
    },
    order_date:{
        type: Date,
        default: Date.now()
    },
    complete_date: {
        type: Date
    },
    refunded: {
        type: Boolean,
        default: false
    },
    comments: {
        type: String,
        default: ''
    }
})


module.exports = User = mongoose.model("orders", OrderSchema);
