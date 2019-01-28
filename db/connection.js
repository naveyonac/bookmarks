const  mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bookmarks')

mongoose.Promise = Promise

module.exports = mongoose
