const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')

router.get('/', controller.index)
router.get('/characters', controller.allCharacters)
router.post('/characters/create', controller.create)



module.exports = router
