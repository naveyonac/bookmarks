const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.index)
router.get('/new', userController.new)
router.post('/', userController.create)
// router.get('/login', userController.loadLogin)
router.get('/login', userController.login)


module.exports = router