const mongoose = require('./../models/bookmarkModel')

const bookmark = mongoose.model('bookmarkModel')

module.exports = {
    index: (req, res,) => {
        // const db = req.db
        // let collection = db.collection('bookmarkmodels')
        // let links = collection.link
        bookmark.find().then(result => {
            // let links = result.link
            res.render('bookmarkViews/indexBookmark', {result})
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
            res.redirect('/bookmark')
        })
    },
}