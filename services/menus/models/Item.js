
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    names: [
        {
            language: {
                type: String
            },
            content: {
                type: String
            }
        }
    ],
    descriptions: [
        {
            language: {
                type: String
            },
            content: {
                type: String
            }
        }
    ],
    price: {
        type: Number,
        default: 0
    },
    portions: {
        type: Number,
        default: 1
    },
    photos: [
        {
            type: String
        }
    ],
    coverPhoto: {
        type: String
    }
})


module.exports = Item = mongoose.model("items", ItemSchema);
