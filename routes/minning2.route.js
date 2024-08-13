const authcontroller = require('../controller/auth.controller')
const minningcontroller = require('../controller/minning.controller')

const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })

const GuardAuth = require('./guardAuth')
router.post('/', body, minningcontroller.startMinningController)
router.get('/minning',minningcontroller.showminning)

module.exports = router;