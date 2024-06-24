const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })
const authController = require('../controller/auth.controller')
router.post('/', body, authController.addPadget)
module.exports = router;