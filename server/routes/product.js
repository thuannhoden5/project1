const express = require('express')
const router = express.Router();
const products = require('../controllers/product');
const catchAsync = require("../utils/catchAsync")

router.route('/')
    .get(catchAsync(products.index))
    .post(catchAsync(products.createNewProduct))

module.exports = router