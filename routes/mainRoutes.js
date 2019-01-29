const express = require('express')
const router = express.Router()
const bookmarkController = require('./../controllers/mainController')

router.get('/', bookmarkController.index)

module.exports = router