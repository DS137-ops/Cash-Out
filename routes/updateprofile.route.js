const updatecontroller = require('../controller/updateprofile.controller')
const authmodel = require('../model/auth.model')
const router = require('express').Router()
const body = require('express').urlencoded({ extended: true })

router.get('/',updatecontroller.getupdatepage)
router.post('/' ,body, updatecontroller.updateprofilepost)
module.exports = router;