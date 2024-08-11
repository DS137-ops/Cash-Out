const electController = require('../controller/elect.controller')

const GuardAuth = require('../routes/guardAuth')

const router = require('express').Router()
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
router.get('/',GuardAuth.isAuth , electController.getOtherPage)
router.post('/',GuardAuth.isAuth ,function (req, res,next) {
    upload(req, res, function (err) {
      if (err) {
        return res.end("Error uploading file." + err);
      }
      
      next()

    });
  }, electController.postOtherBill)
  router.get('/deleteOther/:id' , electController.DeleteOtherBillController )


module.exports = router