const express = require('express')
const router = express.Router();
const user = require('../controllers/user');
const catchAsync = require("../utils/catchAsync")

router.route('/')
    .post(catchAsync(user.register))
router.route('/login')
    .post(catchAsync(user.login))

module.exports = router