const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Bookmark = new Schema ({
    name: String,
    link: String,
    read: Boolean, //search what data type a radio button is
})

mongoose.model('bookmarkModel', Bookmark)


module.exports = mongoose