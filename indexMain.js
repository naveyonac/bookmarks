const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const hbs = require('hbs')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.set('view engine', 'hbs')
app.use(require('./routes/indexRoutes.js'))

//imports css static files into handlebars
app.use(express.static(path.join(__dirname, '/public')))


//starts live server on port 2000
app.listen(2000, (req, res) => {
    console.log('listening on port 2000')
})