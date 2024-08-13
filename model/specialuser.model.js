const mongoose = require('mongoose')
var uri = "mongodb://localhost:27017/bills",
globalconnect = "mongodb+srv://feadkaffoura:YcQJ6vJSgdBFwX9b@cluster0.v3b0sud.mongodb.net/bills?retryWrites=true&w=majority&appName=Cluster0"
    bcrypt = require('bcrypt');
    const specialSchema = new mongoose.Schema({
        email:{
            type:String,
            required:[true , 'please Enter Your Email'],
        },
        password: {
            type:String,
            required:[true , 'please Enter Your Password'],
            minlength : [6,'Password must be more than 6 chars'],
        },
        
    })
    var users = mongoose.model('specialUsers' ,specialSchema)
    exports.postSpecialUser = (email, password) => {
        return new Promise((resolve, reject) => {
            try {
                mongoose.connect(uri).then(() => {
                    return users.findOne({ email: email })
                }).then((userspc) => {
                    if (userspc) {
                        bcrypt.compare(password, userspc.password).then((verif) => {
                            if (verif) {
                                mongoose.disconnect()
                                resolve(userspc._id)
                            } else {
                                mongoose.disconnect()
                                reject("Invalid Password")
                            }
                        })
                    } else {
                        mongoose.disconnect()
                        reject("Invalid Email")
                    }
                }).catch((err) => {
                    mongoose.disconnect()
                    reject(`Database connection error: ${err}`) // Provide a more informative message
                })
            } catch (err) {
                reject(err) // Handle other potential errors dglobalconnectng authentication
            }
        })
    }
    