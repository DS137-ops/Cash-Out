const electController = require('../controller/elect.controller')

const GuardAuth = require('../routes/guardAuth')

const router = require('express').Router()

router.get('/',GuardAuth.isAuth , electController.getOtherPage)

module.exports = router