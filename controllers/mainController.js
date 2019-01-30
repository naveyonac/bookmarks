module.exports = {
    index: (req, res) => {
        res.render('index', {
            page: 'homepage',
            title: 'Main Index'
            })
    }
}