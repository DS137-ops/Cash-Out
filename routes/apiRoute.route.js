const billscontroller = require('../controller/api.controller')
const authcontroller = require('../controller/auth.controller')
const electController = ('../controller/elect.controller')
const registercontroller = require('../controller/auth.controller')
const remindersController = require('../controller/reminder.controller')
const multer = require('multer')
const GuardAuth = require('./guardAuth')
const authmodel = require('../model/auth.model')
const billmodel = require('../model/bill.model')
const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })
const nodeSchedule = require('node-schedule');
const nodemailer = require('nodemailer');
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
    billmodel.getelectsdataForApi(req.params.id).then((NetData)=>{
      res.json({error:false,data4:{NetData},message:"success"})
    }).catch(()=>{
      res.json({error:true,data1:{}})
    })
})

router.get('/getwaterbills/:id' , (req,res,next)=>{
  billmodel.getwatersdataForApi(req.params.id).then((NetData)=>{
    res.json({error:false,data4:{NetData},message:"success"})

  }).catch(()=>{
    res.json({error:true,data2:{}})
  })
})


router.get('/getphonebills/:id' , (req,res,next)=>{
  billmodel.getphonesdataForApi(req.params.id).then((NetData)=>{
    res.json({error:false,data4:{NetData},message:"success"})
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
  billmodel.getOthersdataForApi(req.params.id).then((NetData)=>{
    res.json({error:false,data4:{NetData},message:"success"})
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
  authmodel.updateBudgetBillForApi(req.body.padgetval,req.body.padgDate1,req.body.padgDate2 , req.params.id).then(()=>{

    res.json({error:false,message:"success"})

  }).catch((err)=>{
    console.log(err)
    res.json({error:true,message:"failed"})

  })
})

router.get('/getUserBudget/:id',body,(req,res,next)=>{
  authmodel.getuserPadget(req.params.id).then((userBudget)=>{

    res.json({error:false,userBudget,message:"success"})

  }).catch((err)=>{
    console.log(err)
    res.json({error:true,message:"failed"})

  })
})

router.get('/getReminder/:id',(req,res)=>{
  authmodel.getRemindersForApi(req.params.id).then((Reminders)=>{
    res.json({error:false , Reminders, message:'success'})
  }).catch((err)=>{
    res.json({error:true , err})
  })
})

router.post('/AddReminder/:id',body,(req,res)=>{
  authmodel.PostDataReminderForApi(req.body.RemVal,req.body.RemDate,req.params.id).then((Reminders)=>{
    res.json({error:false , message:'success'})
  }).catch((err)=>{
    res.json({error:true , err})
  })
})


router.post('/addNetBill/:id',body,(req,res)=>{
  billmodel.addnetnewbillForApi(req.body.name,req.body.value,req.body.date,req.body.imgUri,req.params.id).then((rr)=>{
    authmodel.updatePadget(req.session.userid,req.body.value).then(()=>{
      res.json({error:false  , message:'success'})
    })
  }).catch((err)=>{
    res.json({error:true  , message:'not success'})
  })
})
router.post('/addElectBill/:id',body,(req,res)=>{
  billmodel.addelectnewbillForApi(req.body.name,req.body.value,req.body.date,req.body.imgUri,req.params.id).then((rr)=>{
    authmodel.updatePadget(req.session.userid,req.body.value).then(()=>{
      res.json({error:false  , message:'success'})
    })
  }).catch((err)=>{
    res.json({error:true  , message:'not success'})
  })
})
router.post('/addWaterBill/:id',body,(req,res)=>{
  billmodel.addwaternewbillForApi(req.body.name,req.body.value,req.body.date,req.body.imgUri,req.params.id).then((rr)=>{
    res.json({error:false  , message:'success'})
  }).catch((err)=>{
    res.json({error:true  , message:'not success'})
  })
})
router.post('/addClothesBill/:id',body,(req,res)=>{
  billmodel.addclothesnewbillForApi(req.body.name,req.body.value,req.body.date,req.body.imgUri,req.params.id).then((rr)=>{
    res.json({error:false  , message:'success'})
  }).catch((err)=>{
    res.json({error:true  , message:'not success'})
  })
})

router.post('/addPhoneBill/:id',body,(req,res)=>{
  billmodel.addphonenewbillForApi(req.body.name,req.body.value,req.body.date,req.body.imgUri,req.params.id).then((rr)=>{
    res.json({error:false  , message:'success'})
  }).catch((err)=>{
    res.json({error:true  , message:'not success'})
  })
})
module.exports = router;

