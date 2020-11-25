const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

// /products => GET
router.get("/products", shopController.getProductList);

// /cart => GET
router.get("/cart", shopController.getCart);

// /orders => GET
router.get("/orders", shopController.getOrders);

// /checkout => GET
router.get("/checkout", shopController.getCheckout);

module.exports = router;
