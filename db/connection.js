const  mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/bookmarks')

mongoose.Promise = Promise

mongoose
  .connect('mongodb://localhost/bookmarks', {useNewUrlParser: true})
  .then(connection => console.log(`Connection established to db`))
  .catch(connectionError => console.log('Connection failed!', connectionError))


module.exports = mongoose
