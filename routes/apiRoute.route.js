const billscontroller = require('../controller/api.controller')
const authcontroller = require('../controller/auth.controller')

const authmodel = require('../model/auth.model')
const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })

router.post('/login',body, (req,res)=>{
    authmodel.userloginmodel(req.body.email, req.body.password).then((id) => {
        req.session.userid = id
        let y = req.body.email
        authmodel.userloginmodelforapi(req.body.email, req.body.password).then((userr)=>{
          res.json({error:false,data:{userr}})
        })
         
  }).catch((err) => {
    res.json({error:true,data:{}})
  })
})


module.exports = router;