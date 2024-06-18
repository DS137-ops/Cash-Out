const aboutcontroller = require('../controller/about.controller')

const GuardAuth = require('../routes/guardAuth')

const router = require('express').Router()

router.get('/', GuardAuth.isAuth, aboutcontroller.getaboutpage)
module.exports = router;