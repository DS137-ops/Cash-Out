const authmodel = require('../model/auth.model')
const billModel = require('../model/bill.model')
var nodemailer = require('nodemailer');
function sendEmail(email,pudget) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'firaskingsalha67@gmail.com',
          pass: 'cpzz lnvy ldus tczj'
        }
      });
      var mailOptions = {
        from: 'firaskingsalha67@gmail.com',
        to: email,
        subject: 'Attention please!',
        text: 'your pudget has reached to  ' +  '( ' + pudget + ' )'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}
exports.getclothespage = (req,res,next) =>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
            authmodel.getuserPadget(req.session.userid).then((userOfPadget)=>{
                billModel.getclothesdata(req.session.userid).then((clothesdata)=>{
                    res.render('clothes', {userOfPadget:userOfPadget, userdata: userdata, verifuser: req.session.userid , clothesdata:clothesdata })
                })
            })
        
    })
}

exports.addnewclothesbill = (req,res,next)=>{
    billModel.addclothesnewbill(req.body.name,req.body.value,req.body.brand,req.body.date,req.file.filename,req.session.userid).then(()=>{
        authmodel.updatePadget(req.session.userid,req.body.value).then(()=>{
            authmodel.getuserPadget(req.session.userid).then((usrbud)=>{
                if(usrbud.padget<=0){
                    sendEmail(usrbud.email,usrbud.padget)
                }
                res.redirect('/clothes')
            })
        })
    })
}

exports.DeleteBillController = (req,res,next)=>{
    let ClothesId = req.params.id
    billModel.deleteClothesBill(ClothesId).then((DeleteRes)=>{
          res.redirect('/clothes')
    })
}
