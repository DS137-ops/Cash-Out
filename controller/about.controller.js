
const authmodel = require('../model/auth.model')
exports.getaboutpage = (req, res, next) => {
    authmodel.gethomedata(req.session.userid).then((userdata) => {
        res.render('about', { userdata: userdata, verifuser: req.session.userid })
    })

}