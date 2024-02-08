const express = require('express');
const router = express.Router();
const { registerUser, loginUser, setuserdetails } = require('../controllers/userController');
router.post('/register',registerUser)
router.post('/login',loginUser)
module.exports = router