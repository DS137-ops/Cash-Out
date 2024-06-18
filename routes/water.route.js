const electcontroller = require('../controller/elect.controller')

const router = require('express').Router()
const GuardAuth = require('./guardAuth')
const multer = require('multer')
router.get('/', GuardAuth.isAuth, electcontroller.getwaterpage)


router.post('/', GuardAuth.isAuth,multer({
    storage : multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'assets/uploads')
        },
        filename:function(req,file,cb){
            cb(null,Date.now()+'.'+file.originalname)
        }
    })
}).single(["photo"]), electcontroller.addnewwaterbill)

module.exports = router;