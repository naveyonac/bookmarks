const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'hbs')
app.use(require('./routes/indexRoutes.js'))

app.listen(2020, (req, res) => {
    console.log('listening on port 2020')
})