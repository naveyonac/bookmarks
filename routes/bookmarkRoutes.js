const express = require('express')
const router = express.Router()
const bookmarkController = require('../controllers/bookmarkController')

router.get('/', bookmarkController.index)

module.exports = router