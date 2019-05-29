const Menu = require('./Menu')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScheduleSchema = new Schema({
    days: [
        {
            name: String,
            menu: Menu
        }
    ],
    isActive: {
        type: Boolean
    }
})


module.exports = Schedule = mongoose.model("schedules", ScheduleSchema);
