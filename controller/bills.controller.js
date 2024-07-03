const authmodel = require('../model/auth.model')
const billmodel = require('../model/bill.model')
const path = require('path')

exports.getbillspage = (req, res, next) => {
    authmodel.gethomedata(req.session.userid).then((userdata) => {
        authmodel.getuserPadget(req.session.userid).then((respadg)=>{
            res.render('bills', {respadg:respadg, userdata: userdata, verifuser: req.session.userid})
        })
    })
}

