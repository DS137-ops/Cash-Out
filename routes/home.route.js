const homecontroller = require('../controller/home.controller')

const router = require('express').Router()
const GuardAuth = require('./guardAuth')
router.get('/', GuardAuth.isAuth, homecontroller.gethomepage)
module.exports = router;