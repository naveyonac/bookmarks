const mongoose = require('./../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    userName: String,
    email: String,
    password: String
})

module.exports = {
    User: mongoose.model('User', User)
}