exports.isAuth = (req, res, next) => {
    if (req.session.userid) {
        next()
    } else {
        res.redirect('/login')
    }
}

exports.isNotAuth = (req, res, next) => {
    if (!req.session.userid) {
        next()
    } else {
        res.redirect('/')
    }
}
