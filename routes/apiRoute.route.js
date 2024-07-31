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
    billmodel.getelectsdataForApi(req.params.id).then((ElectData)=>{
      res.json({error:false,data1:{ElectData},message:"success"})
    }).catch(()=>{
      res.json({error:true,data1:{}})
    })
})

router.get('/getwaterbills/:id' , (req,res,next)=>{
  billmodel.getwatersdataForApi(req.params.id).then((WaterData)=>{
    res.json({error:false,data2:{WaterData},message:"success"})
  }).catch(()=>{
    res.json({error:true,data2:{}})
  })
})

router.get('/getphonebills/:id' , (req,res,next)=>{
  billmodel.getphonesdataForApi(req.params.id).then((phoneData)=>{
    res.json({error:false,data3:{phoneData},message:"success"})
  }).catch(()=>{
    res.json({error:true,data3:{}})
  })
})

router.get('/getNetbills/:id' , (req,res,next)=>{
  billmodel.getNetsdataForApi(req.params.id).then((NetData)=>{
    res.json({error:false,data4:{NetData},message:"success"})
  }).catch(()=>{
    res.json({error:true,data4:{}})
  })
})

router.get('/getOtherbills/:id' , (req,res,next)=>{
  billmodel.getOthersdataForApi(req.params.id).then((OthersData)=>{
    res.json({error:false,data5:{OthersData},message:"success"})
  }).catch(()=>{
    res.json({error:true,data5:{}})
  })
})

router.get('/DeleteElectBill/:id',(req,res,next)=>{
  billmodel.deleteElectBillForApi(req.params.id).then((boolRes)=>{
    res.json({error:false,dataD1:{boolRes},message:"success"})

  }).catch((err)=>{
    res.json({error:true,dataD1:{}})

  })
})

router.get('/DeleteWaterBill/:id',(req,res,next)=>{
  billmodel.deleteWaterBillForApi(req.params.id).then((boolRes)=>{
    res.json({error:false,dataD2:{boolRes},message:"success"})

  }).catch((err)=>{
    res.json({error:true,dataD2:{}})

  })
})

router.get('/DeletePhoneBill/:id',(req,res,next)=>{
  billmodel.deletePhoneBillForApi(req.params.id).then((boolRes)=>{
    res.json({error:false,dataD3:{boolRes},message:"success"})

  }).catch((err)=>{
    res.json({error:true,dataD3:{}})

  })
})

router.get('/DeleteNetBill/:id',(req,res,next)=>{
  billmodel.deleteNetBillForApi(req.params.id).then((boolRes)=>{
    res.json({error:false,dataD4:{boolRes},message:"success"})

  }).catch((err)=>{
    res.json({error:true,dataD4:{}})

  })
})

router.post('/updateBudgetBill/:id',body,(req,res,next)=>{
  authmodel.updateBudgetBillForApi(req.params.id,req.body.value).then((updatedBudget)=>{
    res.json({error:false,dataU1:{updatedBudget},message:"success"})

  }).catch((err)=>{
    console.log(err)

  })
})

module.exports = router;

