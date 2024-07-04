const billscontroller = require('../controller/api.controller')
const authcontroller = require('../controller/auth.controller')
const registercontroller = require('../controller/auth.controller')

const authmodel = require('../model/auth.model')
const billmodel = require('../model/bill.model')
const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })

router.post('/login',body, (req,res)=>{
    authmodel.userloginmodel(req.body.email, req.body.password).then((id) => {
        req.session.userid = id
        authmodel.userloginmodelforapi(req.body.email, req.body.password).then((userr)=>{
          res.json({error:false,data:{userr}})
        })
         
  }).catch((err) => {
    res.json({error:true,data:{}})
  })
})


router.post('/register', body, (req,res)=>{
  authmodel.postdatamodelforapi(req.body.name, req.body.email, req.body.password, req.body.city).then((userapi)=>{
    res.json({error:false,data:{userapi},message:"success"})

  }).catch((err)=>{
    res.json({error:true,data:{}})
  })
  
})



module.exports = router;