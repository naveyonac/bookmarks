const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const hbs = require('hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.set('view engine', 'hbs')
app.use(require('./routes/indexRoutes.js'))
app.engine('hbs', hbs({ defaultLayout: 'main'}))

app.use(express.static(path.join(__dirname, '/public')))
// app.use(express.static('public'))
// app.use(express.static(__dirname + 'public'))

app.listen(2000, (req, res) => {
    console.log('listening on port 2000')
})