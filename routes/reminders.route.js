const remindersController = require('../controller/reminder.controller')
const electController = require('../controller/elect.controller')

const body = require('express').urlencoded({ extended: true })

const GuardAuth = require('../routes/guardAuth')

const router = require('express').Router()

router.get('/' , electController.getRemindersPage)
router.post('/' ,body, electController.PostReminder)

module.exports = router