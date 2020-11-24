const path = require("path");

const express = require("express");

const errorController = require("../controllers/error");

const router = express.Router();

//Route handling middlewares
router.use(errorController.get404);

module.exports = router;
