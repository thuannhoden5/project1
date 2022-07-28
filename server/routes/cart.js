const express = require('express')
const router = express.Router();
const cart = require('../controllers/cart');
const catchAsync = require("../utils/catchAsync")

router.route('/')
    .put(catchAsync(cart.updateCart))


module.exports = router