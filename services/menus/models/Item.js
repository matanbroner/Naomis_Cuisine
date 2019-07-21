
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: {
        heb: String,
        eng: String
    },
    description: {
        heb: String,
        eng: String
    },
    price: {
        type: Number,
        default: 0
    },
    serves: {
        type: Number,
        default: 1
    },
    type: {
        type: String
    },
    photos: [
        String
    ],
    coverPhoto: String
})


module.exports = Item = mongoose.model("items", ItemSchema);
