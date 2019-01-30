const bookmark = require('./../models/bookmarkModel')

module.exports = {
    index: (req, res) => {
        res.render('bookmarkViews/indexBookmark')
    },
    new: (req, res) => {
        res.render('bookmarkViews/newBookmark')
    },
    create: (req, res) => {
        Bookmark.create({
            link: req.body.link,
            read: req.body.read
        }).then(newBookmark => {
            res.redirect('/')
        })
    },
}