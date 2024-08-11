const mongoose = require('mongoose')
var uri = "mongodb://localhost:27017/bills",
globalconnect = "mongodb+srv://feadkaffoura:YcQJ6vJSgdBFwX9b@cluster0.v3b0sud.mongodb.net/bills?retryWrites=true&w=majority&appName=Cluster0"
    bcrypt = require('bcrypt');
    const billSchema = new mongoose.Schema({
        name:String,
        value:Number,
        brand:{
            type:String,
            default:null,
        },
        date:String,
        photo:{
            type:String,
            default:null
        },
        userid:String,
        billtype:{
            type:String,
            default:null
        },
        
    })
    var billss = mongoose.model('bills', billSchema)
    
    exports.addelectnewbill = (name,value,date,photo,userid) =>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                    let newbook = new billss({
                        name:name,
                        value:value,
                        date:date,
                        photo:photo,
                        userid:userid,
                        billtype:"elect"
                    })
                    return newbook.save()
                
            }).then((newbilll)=>{
                
                mongoose.disconnect()
                resolve(newbilll)
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    }

    exports.getelectsdata = (id)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                return billss.find({userid:id,billtype:"elect"})
            }).then((bills)=>{
                mongoose.disconnect()
                resolve(bills)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
    exports.getclothesdata = (id)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                return billss.find({userid:id,billtype:"clothes"})
            }).then((bills)=>{
                mongoose.disconnect()
                resolve(bills)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
    
    exports.addclothesnewbill = (name,value,brand,date,photo,userid)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                
            }).then(()=>{
                let newbook = new billss({
                    
                    name:name,
                    value:value,
                    brand:brand,
                    date:date,
                    photo:photo,
                    userid:userid,
                    billtype:"clothes"
                })
                return newbook.save()
            }).then(()=>{
                mongoose.disconnect()
                resolve('added')
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    }


    exports.addwaternewbill = (name,value,date,userid)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                
            }).then(()=>{
                let newbook = new billss({
                    
                    name:name,
                    value:value,
                    date:date,
                    photo:null,
                    userid:userid,
                    billtype:"water"
                })
                return newbook.save()
            }).then(()=>{
                mongoose.disconnect()
                resolve('added')
            }).catch((err)=>{
                mongoose.disconnect()
                reject(err)
            })
        })
    }

    exports.getwatersdata = (id)=>{
        return new Promise((resolve, reject) => {
            mongoose.connect(globalconnect).then(()=>{
                return billss.find({userid:id,billtype:"water"})
            }).then((bills)=>{
                mongoose.disconnect()
                resolve(bills)
            }).catch((err)=>{
                reject(err)
            })
        })
    }


    
exports.addphonenewbill = (name,value,date,photo,userid) =>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            let newbook = new billss({
                    
                name:name,
                value:value,
                date:date,
                photo:photo,
                userid:userid,
                billtype:"phone"
            })
            return newbook.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getphonesdata = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"phone"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.getOthersdataForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"other"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getphonesdataForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"phone"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}


exports.addnetnewbill = (name,value,date,photo,userid) =>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            let newbook = new billss({
                    
                name:name,
                value:value,
                date:date,
                photo:photo,
                userid:userid,
                billtype:"net"
            })
            return newbook.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.addnetnewbillForApi = (name,value,date,photo,userid) =>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            let newbook = new billss({
                    
                name:name,
                value:value,
                date:date,
                photo:photo,
                userid:userid,
                billtype:"net"
            })
            return newbook.save()
        }).then(()=>{
            mongoose.disconnect()
            console.log(22)
            resolve('added')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}



exports.getnetsdata = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"net"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.getNetsdataForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"net"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.getsum = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.find({_id:id , billtype:"net"})
        }).then((user)=>{
            return billss.aggregate([{$match:{pid:{$eq:user.userid}}}, {$group:{_id:'663248a810678f31c83f7970',sum:{$sum:'$value'}}}])
        }).then((calcu)=>{
            mongoose.disconnect()
            console.log(calcu)
            resolve(calcu)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}


exports.getelectsdataForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id,billtype:"elect"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            reject(err)
        })
    })
}

exports.getwatersdataForApi = (id)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
            return billss.find({userid:id, billtype:"water"})
        }).then((bills)=>{
            mongoose.disconnect()
            resolve(bills)
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}

exports.deleteElectBill = (ElectId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:ElectId})
        }).then((resElect)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.deleteClothesBill = (ClothesId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:ClothesId})
        }).then((resClothes)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

exports.deleteElectBillForApi = (ElectId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:ElectId})
        }).then((resElect)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

exports.deleteWaterBill = (WaterId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:WaterId})
        }).then((resWater)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.deleteWaterBillForApi = (WaterId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:WaterId})
        }).then((resWater)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

exports.deletePhoneBill = (PhoneId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:PhoneId})
        }).then((resPhone)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.deletePhoneBillForApi = (PhoneId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:PhoneId})
        }).then((resPhone)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

exports.deleteNetBill = (NetId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:NetId})
        }).then((resNet)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}
exports.deleteNetBillForApi = (NetId)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(globalconnect).then(()=>{
           return billss.deleteOne({_id:NetId})
        }).then((resNet)=>{
            resolve(true)
        }).catch((err)=>{
            reject(err)
        })
    })
}

