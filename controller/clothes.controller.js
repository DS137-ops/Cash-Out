const authmodel = require('../model/auth.model')
const billModel = require('../model/bill.model')
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
            res.redirect('/clothes')
        })
    })
}

exports.DeleteBillController = (req,res,next)=>{
    let ClothesId = req.params.id
    billModel.deleteClothesBill(ClothesId).then((DeleteRes)=>{
          res.redirect('/clothes')
    })
}
