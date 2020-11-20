const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFoundRoutes = require("./routes/notFound");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

//Parse handling middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(shopRoutes);
app.use(notFoundRoutes);

//Creating server using app which does what ^^ does
app.listen(3000);
