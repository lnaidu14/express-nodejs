const express = require("express");

const prodcutsController = require("../controllers/products");

const router = express.Router();

router.get("/", prodcutsController.getShopProduct);

module.exports = router;
