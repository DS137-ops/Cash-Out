const billscontroller = require('../controller/api.controller')
const authmodel = require('../model/auth.model')
const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })

router.post('/login',body, (req,res)=>{
    authmodel.userloginmodel(req.body.email, req.body.password).then((id) => {
        req.session.userid = id
        res.json({error:false,data:{id}})

  }).catch((err) => {
    res.json({error:true,data:{}})
  })
})


module.exports = router;