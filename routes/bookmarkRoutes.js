const express = require('express')
const router = express.Router()
const bookmarkController = require('../controllers/bookmarkController')

router.get('/', bookmarkController.index)
router.get('/new', bookmarkController.new)
router.post('/', bookmarkController.create)
router.get('/:id', bookmarkController.showOne)
// router.get('/:id/edit', bookmarkController.edit)
// router.post('/:id', bookmarkController.update)
// router.delete('/:id', bookmarkController.destroy)
router.post('/:id', bookmarkController.destroy)

module.exports = router