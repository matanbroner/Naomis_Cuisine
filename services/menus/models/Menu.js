const Item = require('./Item').schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
    days: {
        m: [Item],
        t: [Item],
        w: [Item],
        th: [Item],
        f: [Item],
        sat: [Item],
        sun: [Item]
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isScheduledActive: {
        type: Boolean,
        default: false
    },
    dateScheduled: Date,
    history: [
        {
            dateActive: Date,
            dateInactive: Date
        }
    ]
})


module.exports = Menu = mongoose.model("menus", MenuSchema);
