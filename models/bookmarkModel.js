const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bookmark = new Schema ({
    link: String,
    read: Boolean,
})

module.exports = {
    Bookmark: mongoose.model('Bookmark', Bookmark)
}