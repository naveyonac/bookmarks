const express = require('express')
const router = express.Router()
const bookmarkController = require('../controllers/bookmarkController')

router.get('/', bookmarkController.index)
router.get('/new', bookmarkController.new)
router.post('/', bookmarkController.create)
// router.get('/:id', bookmarkController.show)
// router.get('/:id/edit', bookmarkController.edit)
// router.put('/:id', bookmarkController.update)
// router.delete('/:id', bookmarkController.destroy)

module.exports = router