const electcontroller = require('../controller/elect.controller')

const router = require('express').Router()
const GuardAuth = require('./guardAuth')
const multer = require('multer')

router.get('/', GuardAuth.isAuth, electcontroller.getelectpage)

router.post('/',multer({
    storage : multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'assets/uploads')
        },
        filename:function(req,file,cb){
            cb(null,Date.now()+'.'+file.originalname)
        }
    })
}).single(["photo"]), GuardAuth.isAuth,electcontroller.addnewelectbill)


router.get('/deleteElect/:id' , electcontroller.DeleteBillController)

module.exports = router;