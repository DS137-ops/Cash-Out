const electcontroller = require('../controller/elect.controller')

const router = require('express').Router()
const GuardAuth = require('./guardAuth')
const multer = require('multer')
router.get('/', GuardAuth.isAuth, electcontroller.getnetpage)
router.post('/',GuardAuth.isAuth ,multer({
    storage : multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'assets/uploads')
        },
        filename:function(req,file,cb){
            cb(null,Date.now()+'.'+file.originalname)
        }
    })
}).single(["photo"]) , electcontroller.addnewnetbill)

router.get('/deleteNet/:id' , electcontroller.DeleteNetBillController )


module.exports = router;