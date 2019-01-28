const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema ({
    userName: String,
    comment: String,
})

module.exports = {
    Note: mongoose.model('Note', Note)
}