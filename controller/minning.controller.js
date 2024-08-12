const authmodel = require('../model/auth.model')
const billModel = require('../model/bill.model')
const minningModel = require('../model/specialuser.model')

exports.getLoginMinning = (req,res,next)=>{
    res.render('loginminning')
}
exports.userSpeciallogin = (req,res,next)=>{
    minningModel.postSpecialUser(req.body.email,req.body.password).then((id)=>{
        console.log(req.body.email)
        cosnole.log(req.body.password)
        req.session.userid = id
        res.redirect('/')
    }).catch((err)=>{
        console.log(err)
    })
}

exports.showminning = (req,res,next)=>{
   
    res.render('minning')
}