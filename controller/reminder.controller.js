const authmodel = require('../model/auth.model')
const billmodel = require('../model/bill.model')

exports.getRemindersPage = (req,res,next)=>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
        authmodel.getReminders(req.session.userid).then((ResRem)=>{
            res.render('reminder',{ResRem:ResRem,verifuser:req.session.userid,userdata:userdata})

        })
    })
}
exports.PostReminder = (req,res,next)=>{
    authmodel.PostDataReminder(req.body.RemVal , req.body.RemDate , req.session.userid).then((RemResult)=>{
      res.redirect('/')
    })
}