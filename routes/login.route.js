const authcontroller = require('../controller/auth.controller')
const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })

const GuardAuth = require('./guardAuth')
router.get('/login', GuardAuth.isNotAuth, authcontroller.ShowLoginPage)
router.post('/login', body, authcontroller.userlogin)

router.get('/', GuardAuth.isAuth, (req, res, next) => {
     res.render('addbill')
})


module.exports = router;