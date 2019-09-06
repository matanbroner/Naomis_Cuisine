
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        default: 'ADU Employee'
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: 'Customer'
    },
    profilePicture: {
        type: String,
    },
    refferalCode: {
        type: String
    }
})


module.exports = User = mongoose.model("users", UserSchema);
