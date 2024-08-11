const authcontroller = require('../controller/auth.controller')
const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })

const GuardAuth = require('./guardAuth')



module.exports = router;