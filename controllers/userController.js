const { User } = require('./../models/userModel')

module.exports = {
    index: (req, res) => {
    User.find({}).then((data) => {
        res.render('UsersViews/usersViews', data)
        })
    },

    new: (req, res) => {
        res.render('userViews/newUser')
    },

    create: (req, res) => {
        User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        }).then(newUser => {
            res.redirect('/')
        })
    }

}