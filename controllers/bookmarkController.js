const bookmark = require('./../models/bookmarkModel')

module.exports = {
    new: (req, res) => {
        res.render('bookmarkViews/newBookmark')
    }
}