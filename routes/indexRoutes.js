const express = require('express')
const router = express.Router()

router.use('/', require('./mainRoutes'))
router.use('/user', require('./userRoutes'))
router.use('/bookmark', require('./bookmarkRoutes'))
// router.use('/note', require('./noteRoutes'))

module.exports = router
