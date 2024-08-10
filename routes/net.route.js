const electcontroller = require('../controller/elect.controller')
const path = require('path')
const router = require('express').Router()
const GuardAuth = require('./guardAuth')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'assets/uploads'); // Specify the upload directory
    },
    filename: function (req, file, callback) {
      const imageUrl = file.fieldname + '-' + Date.now() + '.jpg'; // Generate a unique filename
      callback(null, imageUrl);
    }
  });
  
  const upload = multer({ storage: storage }).single(['photo']);


router.get('/', GuardAuth.isAuth, electcontroller.getnetpage)
router.post('/', function (req, res) {
    upload(req, res, function (err) {
      if (err) {
        return res.end("Error uploading file." + err);
      }
      const path = req.file.path;
      console.log('Uploaded file:', req.file); // Log the file object
      res.end("File is uploaded url: " + path);
    });
  }, electcontroller.addnewnetbill)

router.get('/deleteNet/:id' , electcontroller.DeleteNetBillController )




/* 
GuardAuth.isAuth ,multer({
    storage : multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'assets/uploads')
        },
        filename:function(req,file,cb){
            console.log(file.originalname)
            const s=file.fieldname + '-' + Date.now() + '.jpg';
            cb(null, s)
            null,Date.now()+'.'+file.originalname
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
            
        }
    })
}).single(["photo"])
*/

module.exports = router;