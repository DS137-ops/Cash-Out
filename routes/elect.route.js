const electcontroller = require('../controller/elect.controller')
const billmodel = require('../model/bill.model')
const router = require('express').Router()
const GuardAuth = require('./guardAuth')
const multer = require('multer')
const body = require('express').urlencoded({ extended: true })
/*const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'assets/uploads'); // Specify the upload directory
    },
    filename: function (req, file, callback) {
      const imageUrl = Date.now() + '.jpg'; // Generate a unique filename
      callback(null, imageUrl);
    }
  });
  
  const upload = multer({ storage: storage }).single(['photo']);



*/



  const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

router.get('/', GuardAuth.isAuth, electcontroller.getelectpage)

router.post('/',function (req, res,next) {
    upload(req, res, function (err) {
      if (err) {
        return res.end("Error uploading file." + err);
      }
      
      next()

    });
  }, GuardAuth.isAuth,electcontroller.addnewelectbill)


router.get('/deleteElect/:id' , electcontroller.DeleteBillController)

/*

*/
module.exports = router;