const electcontroller = require('../controller/elect.controller')
const billmodel = require('../model/bill.model')
const router = require('express').Router()
const GuardAuth = require('./guardAuth')
const body = require('express').urlencoded({ extended: true })
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'assets/uploads'); // Specify the upload directory
    },
    filename: function (req, file, callback) {
      const imageUrl = Date.now() + '.jpg'; // Generate a unique filename
      callback(null, imageUrl);
    }
  });
  
  const upload = multer({ storage: storage }).single(['photo']);
router.get('/', GuardAuth.isAuth, electcontroller.getfoodpage)
router.post('/',body, function (req, res,next) {
    upload(req, res, function (err) {
      if (err) {
        return res.end("Error uploading file." + err);
      }
      
      next()

    });
  },GuardAuth.isAuth ,electcontroller.addnewfoodbill)

router.get('/deleteFood/:id' , electcontroller.DeleteFoodBillController )
module.exports = router;
