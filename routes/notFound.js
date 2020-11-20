const path = require("path");

const express = require("express");

const rootDir = require("../helper/path");

const router = express.Router();

//Route handling middlewares
router.use((req, res, next) => {
  res.status(404).render("notFound.hbs", { docTitle: "Not Found" });
});

module.exports = router;
