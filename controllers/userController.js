const mongoose = require('./../models/userModel')


const User = mongoose.model('userModel')

module.exports = {
    index: (req, res) => {
    User.find().then((data) => {
        res.render('UserViews/userViews', data)
        })
    },

    new: (req, res) => {
        res.render('userViews/newUser')
    },

    create: (req, res) => {
        User.create({
            userName: req.body.userName,
            password: req.body.password
        }).then(newUser => {
            console.log(newUser)
            res.redirect('/')
        })
    },
    login: (req, res) => {
        res.render('userViews/userLogin')
    }

}