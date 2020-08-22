const express = require("express");
const order = require("./routes/orders");
const home = require("./routes/home");

const app = express();

// middleware
app.use("/", home);
app.use("/api/orders", order);

// webserver port
app.listen("3000");
