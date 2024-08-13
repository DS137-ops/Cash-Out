const { default: mongoose } = require('mongoose');
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
exports.getelectpage = (req, res, next) => {
    authmodel.gethomedata(req.session.userid).then((userdata) => {
        billModel.getelectsdata(req.session.userid).then((electdata)=>{
            authmodel.getuserPadget(req.session.userid).then((userOfPadget)=>{
                res.render('elect', {userOfPadget:userOfPadget, userdata: userdata, verifuser: req.session.userid , electdata:electdata })

            })
        })
    })
}
exports.addnewelectbill = (req,res,next)=>{
    billModel.addelectnewbill(req.body.name,req.body.value,req.body.date,req.file.filename,req.session.userid).then(()=>{
        authmodel.updatePadget(req.session.userid,req.body.value).then(()=>{
            authmodel.getuserPadget(req.session.userid).then((usrbud)=>{
                if(usrbud.padget<=0){
                sendEmail(usrbud.email,usrbud.padget)
                }
                res.redirect('/elect')
            })
        })
    })
}



exports.getwaterpage = (req, res, next) => {
    authmodel.gethomedata(req.session.userid).then((userdata) => {
        billModel.getwatersdata(req.session.userid).then((waterdata)=>{
            authmodel.getuserPadget(req.session.userid).then((waterPadget)=>{
                res.render('water', { waterPadget:waterPadget , userdata: userdata, verifuser: req.session.userid , waterdata:waterdata })

            })
        })
    })
}



exports.addnewwaterbill = (req,res,next)=>{
    
    billModel.addwaternewbill(req.body.name,req.body.value,req.body.date,req.file.filename,req.session.userid).then(()=>{
        authmodel.updatePadget(req.session.userid,req.body.value).then(()=>{
            authmodel.getuserPadget(req.session.userid).then((usrbud)=>{
                if(usrbud.padget<=0){
                    sendEmail(usrbud.email,usrbud.padget)
                }
                res.redirect('/water')
            })
           
        })

    })
}

exports.getphonepage = (req,res,next)=>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
        billModel.getphonesdata(req.session.userid).then((phonedata)=>{
            authmodel.getuserPadget(req.session.userid).then((phonePadget)=>{
                res.render('phone',{phonePadget:phonePadget,userdata:userdata,verifuser:req.session.userid , phonedata:phonedata})
            })
        })
    })
   
}


exports.addnewphonebill = (req,res,next)=>{
    billModel.addphonenewbill(req.body.name,req.body.value,req.body.date,req.file.filename,req.session.userid).then(()=>{
        authmodel.updatePadget(req.session.userid,req.body.value).then(()=>{
                authmodel.getuserPadget(req.session.userid).then((usrbud)=>{
                    if(usrbud.padget<=0){
                        sendEmail(usrbud.email,usrbud.padget)
                    }
                    res.redirect('/phone')
                })
            
            
            
        })
    })
}
exports.addnewnetbill = (req,res,next)=>{
    billModel.addnetnewbill(req.body.name,req.body.value,req.body.date,req.file.filename,req.session.userid).then(()=>{
        authmodel.updatePadget(req.session.userid,req.body.value).then(()=>{
            authmodel.getuserPadget(req.session.userid).then((usrbud)=>{
                if(usrbud.padget<=0){
                    sendEmail(usrbud.email,usrbud.padget)
                }
                res.redirect('/net')
            })
            
        })
        
    })
}

exports.getnetpage = (req,res,next)=>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
        billModel.getnetsdata(req.session.userid).then((netdata)=>{
            authmodel.getuserPadget(req.session.userid).then((netPadget)=>{
                res.render('net',{netPadget:netPadget,userdata:userdata,verifuser:req.session.userid , netdata:netdata })
            })
        })
    })
}
exports.getfoodpage = (req,res,next)=>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
        billModel.getfoodsdata(req.session.userid).then((fooddata)=>{
            authmodel.getuserPadget(req.session.userid).then((foodPadget)=>{
                res.render('food',{foodPadget:foodPadget,userdata:userdata,verifuser:req.session.userid , fooddata:fooddata })
            })
        })
    })
}
exports.addnewfoodbill = (req,res,next)=>{
   billModel.addfoodnewbill(req.body.name,req.body.value,req.body.date,req.file.filename,req.session.userid).then(()=>{
    authmodel.updatePadget(req.session.userid,req.body.value).then(()=>{
        authmodel.getuserPadget(req.session.userid).then((usrbud)=>{
            if(usrbud.padget<=0){
                sendEmail(usrbud.email,usrbud.padget)
            }
            res.redirect('/food')
        })
    })
   })
}
exports.getOtherPage = (req,res,next) =>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
        billModel.getOthersdataForApi(req.session.userid).then((othersData)=>{
            authmodel.getuserPadget(req.session.userid).then((otherPadget)=>{
                res.render('other',{otherPadget:otherPadget,userdata:userdata,verifuser:req.session.userid,othersData:othersData})
            })
        })
       
    })
}
exports.postOtherBill = (req,res,next) =>{
   billModel.addOtherBill(req.body.name,req.body.value,req.body.date,req.file.filename,req.session.userid).then(()=>{
    authmodel.updatePadget(req.session.userid,req.body.value).then(()=>{
        authmodel.getuserPadget(req.session.userid).then((usrbud)=>{
            if(usrbud.padget<=0){
                sendEmail(usrbud.email,usrbud.padget)
            }
            res.redirect('/other')
        })
        
    })
   })
}
exports.getTipsPage = (req,res,next)=>{
authmodel.gethomedata(req.session.userid).then((userdata)=>{
    res.render('tips',{userdata:userdata,verifuser:req.session.userid})
})
}

exports.DeleteBillController = (req,res,next)=>{
    let ElectId = req.params.id
    billModel.deleteElectBill(ElectId).then((DeleteRes)=>{
          res.redirect('/elect')
    })
}

exports.DeleteWaterBillController = (req,res,next)=>{
    let WaterId = req.params.id
    billModel.deleteWaterBill(WaterId).then((DeleteRes)=>{
          res.redirect('/water')
    })
}

exports.DeletePhoneBillController = (req,res,next)=>{
    let PhoneId = req.params.id
    billModel.deletePhoneBill(PhoneId).then((DeleteRes)=>{
          res.redirect('/phone')
    })
}
exports.DeleteNetBillController = (req,res,next)=>{
    let NetId = req.params.id
    billModel.deleteNetBill(NetId).then((DeleteRes)=>{
          res.redirect('/net')
    })
}

exports.DeleteFoodBillController = (req,res,next)=>{
    let FoodId = req.params.id
    billModel.deleteNetBill(FoodId).then((DeleteRes)=>{
          res.redirect('/food')
    })
}
exports.DeleteOtherBillController = (req,res,next)=>{
    let OtherId = req.params.id
    billModel.deleteOtherBill(OtherId).then((DeleteRes)=>{
          res.redirect('/other')
    })
}

exports.getRemindersPage = (req,res,next)=>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
        authmodel.getReminders(req.session.userid).then((ResRem)=>{
            res.render('reminder',{ResRem:ResRem,verifuser:req.session.userid,userdata:userdata})

        })
    })
}


exports.PostReminder = (req,res,next)=>{
    authmodel.PostDataReminder(req.body.RemVal , req.body.RemDate , req.session.userid).then((RemResult)=>{
        authmodel.getuserPadget(req.session.userid).then((usremail)=>{
          
            authmodel.SendReminderss(req.body.RemVal,req.body.RemDate,usremail.email)
                res.redirect('/')
          
               
            
        
        })
       
      
    })
}
