
const registercontroller = require('../controller/auth.controller')
const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })
const GuardAuth = require('./guardAuth')
router.get('/', GuardAuth.isNotAuth, registercontroller.showregisterpage)
router.post('/', body, registercontroller.postuserdata)

module.exports = router;