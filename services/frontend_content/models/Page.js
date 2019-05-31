const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContentSchema = new Schema({
    english: String,
    hebrew: String
});

const PageSchema = new Schema({
    page_name: String,
    content: {
        type: Map,
        of: ContentSchema
    }
})


module.exports = Page = mongoose.model("pages", PageSchema);