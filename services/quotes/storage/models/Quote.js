
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: Number
    },
    model: {
        model_id: String
    },
    lot_complexity: {
        type: String
    },
    time_to_build: {
        type: String
    },
    finance_required: {
        type: String
    }
})


module.exports = Quote = mongoose.model("quote", QuoteSchema);
