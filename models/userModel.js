const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    userName: String,
    password: String
})

mongoose.model('userModel', User)


module.exports = mongoose