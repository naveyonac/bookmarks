const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
    res.locals.currentUser = req.user
    next()
  })


app.use(require('./routes/indexRoutes.js'))

app.listen(2020, (req, res) => {
    console.log('listening on port 2020')
})