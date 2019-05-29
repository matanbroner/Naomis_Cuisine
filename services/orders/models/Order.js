
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
    complete_date: {
        type: Date
    },
    refunded: {
        type: Boolean,
        default: false
    }
})


module.exports = User = mongoose.model("orders", OrderSchema);
