const bookmark = require('./../models/bookmarkModel')

module.exports = {
    index: (req, res) => {
        res.render('bookmarkViews/indexBookmark')
    },
    new: (req, res) => {
        res.render('bookmarkViews/newBookmark')
    }
}