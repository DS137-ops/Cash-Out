const authmodel = require('../model/auth.model')
const billModel = require('../model/bill.model')
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
           
                res.redirect('/elect')
           
        })
        
    })
}

exports.getwaterpage = (req, res, next) => {
    authmodel.gethomedata(req.session.userid).then((userdata) => {
        billModel.getwatersdata(req.session.userid).then((waterdata)=>{
            res.render('water', { userdata: userdata, verifuser: req.session.userid , waterdata:waterdata })
        })
    })
}



exports.addnewwaterbill = (req,res,next)=>{
    billModel.addwaternewbill(req.body.name,req.body.value,req.body.date,req.file.filename,req.session.userid).then(()=>{
        res.redirect('/water')
    })
}

exports.getphonepage = (req,res,next)=>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
        billModel.getphonesdata(req.session.userid).then((phonedata)=>{
            res.render('phone',{userdata:userdata,verifuser:req.session.userid , phonedata:phonedata})
        })
    })
   
}

exports.addnewphonebill = (req,res,next)=>{
    billModel.addphonenewbill(req.body.name,req.body.value,req.body.date,req.file.filename,req.session.userid).then(()=>{
        res.redirect('/phone')
    })
}
exports.addnewnetbill = (req,res,next)=>{
    billModel.addnetnewbill(req.body.name,req.body.value,req.body.date,req.file.filename,req.session.userid).then(()=>{
        res.redirect('/net')
    })
}

exports.getnetpage = (req,res,next)=>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
        billModel.getnetsdata(req.session.userid).then((netdata)=>{
            billModel.getsum(req.session.userid).then((sumofit)=>{
                res.render('net',{userdata:userdata,verifuser:req.session.userid , netdata:netdata , sumofit:sumofit})
            })
        })
    })
}

exports.getOtherPage = (req,res,next) =>{
    authmodel.gethomedata(req.session.userid).then((userdata)=>{
        res.render('other',{userdata:userdata,verifuser:req.session.userid})
    })
}


