const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController')

router.post('/login', controller.processLogin)
router.post('/register', controller.processRegister)






module.exports = router