const express = require('express');
const router = express.Router();
const authContr = require('../../controllers/auth');

router.post('/signup', authContr.signup);
router.post('/login', authContr.login);

module.exports = router;