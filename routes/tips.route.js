const electController = require('../controller/elect.controller')

const GuardAuth = require('../routes/guardAuth')

const router = require('express').Router()
router.get('/',electController.getTipsPage)
module.exports = router