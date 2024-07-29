const authmodel = require('../model/auth.model')
const handleErrors = (err)=>{
      console.log(err.message)
}
exports.ShowLoginPage = (req, res, next) => {
      res.render('login', { verifuser: req.session.userid,message: req.flash('error')[0] })
}

exports.postuserdata = (req, res, next) => {
      authmodel.postdatamodel(req.body.name, req.body.email, req.body.password, req.body.city).then(() => {
            res.redirect('/')
      }).catch((err) => {
            handleErrors(err)
      })
}

exports.userlogin = (req, res, next) => {
      authmodel.userloginmodel(req.body.email, req.body.password).then((id) => {
            req.session.userid = id
            res.redirect('/')

      }).catch((err) => {
            req.flash('error', err)
            res.redirect('/login')
      })
}


exports.showregisterpage = (req, res, next) => {
      res.render('register', { verifuser: req.session.userid })
}

exports.addPadget = (req,res,next)=>{
      authmodel.adduserPadget(req.body.padgetval,req.body.padgDate,req.session.userid).then((respadg)=>{
            
            authmodel.gethomedata(req.session.userid).then((userdata)=>{
                  res.render('bills',{respadg:respadg,userdata: userdata, verifuser: req.session.userid})
            })
      })
}