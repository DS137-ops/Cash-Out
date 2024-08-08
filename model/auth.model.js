const mongoose = require('mongoose')
var uri = "mongodb://localhost:27017/bills",
globalconnect = "mongodb+srv://feadkaffoura:YcQJ6vJSgdBFwX9b@cluster0.v3b0sud.mongodb.net/bills?retryWrites=true&w=majority&appName=Cluster0"
    bcrypt = require('bcrypt'),
    {isEmail} = require('validator')
    ;
    
var newSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please Enter Your Name']
    } ,
    email: {
        type:String,
        required:[true , 'please Enter Your Email'],
        validate:[isEmail , 'please Enter correct Email']
    },
    password: {
        type:String,
        required:[true , 'please Enter Your Password'],
        minlength : [6,'Password must be more than 6 chars']
    },
    city: String,
    padget: {
        type: Number,
        default:null,
       
      },
      FinalDatePadget: {
        type: String,
        default: () => Date.now() + 1000 * 60 * 60 * 24 * 30
      },
      StartDatePadget: {
        type: String,
        default: () => Date.now() + 1000 * 60 * 60 * 24 * 30
      },
      Reminders:[{
        RemDesc:String,
        RemDate:String
      }]
})
var users = mongoose.model('users', newSchema)
exports.postdatamodel = (name, email, password, city) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(() => {
            return users.findOne({ email: email })
        }).then((user) => {
            if (user) {
                mongoose.disconnect()
                reject('Email is used!')
            } else {
                return bcrypt.hash(password, 10)
            }
        }).then((hpass) => {
            let user = new users({
                name: name,
                email: email,
                password: hpass,
                city: city,
                padget:null
            })
            return user.save()
            
        }).then((user) => {
            mongoose.disconnect()
            resolve(user)
        }).then((err) => {
            mongoose.disconnect()
            reject(err)
        }).catch(err => { console.log(err) })
    })
}

exports.postdatamodelforapi = (name, email, password, city) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(() => {
            return users.findOne({ email: email })
        }).then((user) => {
            if (user) {
                mongoose.disconnect()
                reject('Email is used!')
            } else {
                return bcrypt.hash(password, 10)
            }
        }).then((hpass) => {
            let user = new users({
                name: name,
                email: email,
                password: hpass,
                city: city,
                padget:null
            })
            return user.save()
            
        }).then((user) => {
            mongoose.disconnect()
            resolve(user)
        }).then((err) => {
            mongoose.disconnect()
            reject(err)
        }).catch(err => { console.log(err) })
    })
}

exports.userloginmodel = (email, password) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(() => {
            return users.findOne({ email: email })
        }).then((user) => {
            if (user) {
                bcrypt.compare(password, user.password).then((verif) => {
                    if (verif) {
                        mongoose.disconnect()
                        resolve(user._id)
                    }
                    else {
                        mongoose.disconnect()
                        reject("Invalid Password")
                    }
                })
            }
            else {
                mongoose.disconnect()
                reject("Invalid Email")}
        }).catch((err) => {
            reject(err)})})}

            exports.userloginmodelforapi = (email, password) => {
                return new Promise((resolve, reject) => {
                    mongoose.connect(uri).then(() => {
                        return users.findOne({ email: email })
                    }).then((user) => {
                        if (user) {
                            bcrypt.compare(password, user.password).then((verif) => {
                                if (verif) {
                                    mongoose.disconnect()
                                    resolve(user)
                                }
                                else {
                                    mongoose.disconnect()
                                    reject("Invalid Password")
                                }
                            })
                        }
                        else {
                            mongoose.disconnect()
                            reject("Invalid Email")}
                    }).catch((err) => {
                        reject(err)})})}




exports.gethomedata = (id) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(() => {
            return users.findById(id)
        }).then((userdata) => {
            mongoose.disconnect()
            resolve(userdata)
        }).catch((err) => {
            reject(err)
        })
    })
}

exports.adduserPadget = (padget2,padgDate1,padgDate2,id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
             users.updateMany({_id:new mongoose.Types.ObjectId(id)} , {$set:{   padget:padget2     ,StartDatePadget:padgDate1 ,FinalDatePadget:padgDate2 }}  )
            .then((userpadg)=>{
                mongoose.disconnect()
                resolve(padget2)
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    })
}
exports.adduserPadgetForApi = (padget2,padgDate,id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
             users.updateMany({_id:new mongoose.Types.ObjectId(id)} , {$set:{   padget:padget2     ,FinalDatePadget:padgDate}}  )
            .then((userpadg)=>{
                mongoose.disconnect()
                resolve(padget2)
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    })
}

exports.getuserPadget = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
            return users.findById(id)
            .then((userpadg)=>{
                mongoose.disconnect()
                resolve(userpadg)
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    })
}

exports.updatePadget = (id,val)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
            return users.findById(id)
        }).then((userpadget)=>{
            var userpadget_1 = userpadget.padget
           return users.updateOne({_id:new mongoose.Types.ObjectId(id)} , {$set:{padget:userpadget_1 - val }})
        }).then((userit)=>{
            mongoose.disconnect()
                resolve("Ok")
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.updateBudgetBillForApi = (val,sdate,edate,id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
             users.updateMany({_id:new mongoose.Types.ObjectId(id)} , {$set:{   padget:val     ,StartDatePadget:sdate ,FinalDatePadget:edate }}  )
            .then((userpadg)=>{
                mongoose.disconnect()
                resolve(userpadg)
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    })
}


exports.postupdateprofile = ( name , password , city , email , id )=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
           return users.updateMany({_id:new mongoose.Types.ObjectId(id)} , {$set:{name:name , password:password , city:city , email:email}}  )
        }).then(()=>{
            resolve("updated")
        })
        .catch((err)=>{
            mongoose.disconnect()
            reject("not updated")
        })
    })
}


exports.PostDataReminder = (val , date , id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
           return users.updateMany({_id:new mongoose.Types.ObjectId(id)} , {$push:{Reminders:{RemDesc:val , RemDate:date}}}  )
        }).then(()=>{
            resolve("Rem")
        })
        .catch((err)=>{
            mongoose.disconnect()
            reject("not Rem")
        })
    })
}
exports.PostDataReminderForApi = (val2 , date2 , id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
           return users.updateMany({_id:new mongoose.Types.ObjectId(id)} , {$push:{Reminders:{RemDesc:val2 , RemDate:date2}}}  )
        }).then(()=>{
            resolve("")
        })
        .catch((err)=>{
            mongoose.disconnect()
            reject("")
        })
    })
}

exports.getReminders = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
          return users.findById(id)
        }).then((userRem)=>{
            resolve(userRem.Reminders)
        })
        .catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.getRemindersForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(uri).then(()=>{
            return users.findById(id)
        }).then((Remres)=>{
            resolve(Remres.Reminders)
        }).catch((err)=>{
            reject(err)
        })
    })
}