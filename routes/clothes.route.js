const clothescontroller = require('../controller/clothes.controller')

const router = require('express').Router()
const GuardAuth = require('./guardAuth')
const multer = require('multer')



router.get('/', GuardAuth.isAuth, clothescontroller.getclothespage)

router.post('/',multer({
    storage : multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'assets/uploads')
        },
        filename:function(req,file,cb){
            cb(null,Date.now()+'.'+file.originalname)
        }
    })
}).single(["photo"]), GuardAuth.isAuth,clothescontroller.addnewclothesbill)


router.get('/deleteClothes/:id' , clothescontroller.DeleteBillController)



module.exports = router;