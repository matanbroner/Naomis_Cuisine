const Menu = require('./Menu').schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScheduleSchema = new Schema({
    days: {
        m: Menu,
        t: Menu,
        w: Menu,
        th: Menu,
        f: Menu,
        sat: Menu,
        sun: Menu
    },
    isActive: {
        type: Boolean,
        default: false
    }
})


module.exports = Schedule = mongoose.model("schedules", ScheduleSchema);
