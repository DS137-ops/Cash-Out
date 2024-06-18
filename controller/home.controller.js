
const authmodel = require('../model/auth.model')
exports.gethomepage = (req, res, next) => {
    authmodel.gethomedata(req.session.userid).then((userdata) => {
        res.render('home', { userdata: userdata, verifuser: req.session.userid })
    })
}