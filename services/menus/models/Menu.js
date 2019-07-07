const Item = require('./Item').schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    items: [Item]
})


module.exports = Menu = mongoose.model("menus", MenuSchema);
