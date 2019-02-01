const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema ({
    userName: String,
    comment: String,
})

mongoose.model('Note', Note)

module.exports = mongoose
