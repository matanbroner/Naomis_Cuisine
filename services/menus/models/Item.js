
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    names: {
        heb: String,
        eng: String
    },
    descriptions: {
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
    photos: [
        String
    ],
    coverPhoto: String
})


module.exports = Item = mongoose.model("items", ItemSchema);
