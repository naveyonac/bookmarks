const mongoose = require('./../models/bookmarkModel')

const bookmark = mongoose.model('bookmarkModel')

module.exports = {
    index: (req, res) => {
        res.render('bookmarkViews/indexBookmark', {
            link: mongoose.find()
        })
    },
    new: (req, res) => {
        res.render('bookmarkViews/newBookmark')
    },
    create: (req, res) => {
        bookmark.create({
            link: req.body.link,
            read: req.body.read
        }).then(newBookmark => {
            console.log(newBookmark)
            res.redirect('/')
        })
    },
}