const billscontroller = require('../controller/api.controller')
const authcontroller = require('../controller/auth.controller')
const electController = ('../controller/elect.controller')
const registercontroller = require('../controller/auth.controller')
const multer = require('multer')
const GuardAuth = require('./guardAuth')
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
    res.json({error:false,message:"success"})

  }).catch((err)=>{
    res.json({error:true,data:{}})
  })
  
})

router.get('/getelectbills/:id' , (req,res,next)=>{
    billmodel.getelectsdataforApi(req.params.id).then((ElectData)=>{
      res.json({error:false,data:{ElectData},message:"success"})
    }).catch(()=>{
      res.json({error:true,data:{}})
    })
})

router.get('/getwaterbills/:id' , (req,res,next)=>{
  billmodel.getewatersdataForApi(req.params.id).then((WaterData)=>{
    res.json({error:false,data:{WaterData},message:"success"})
  }).catch(()=>{
    res.json({error:true,data:{}})
  })
})


module.exports = router;

