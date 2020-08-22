const express = require("express");

const app = express();

const stock = [
  {
    name: "lsjkdf",
    quantity: 1,
  },
  {
    name: "lsjfd",
    quantity: 2,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

// get all stock orders
app.get("/api/orders", (req, res) => {
  res.send(stock);
});

// get a stock order
app.get("/api/orders/:id", (req, res) => {
  const id = req.params.id;
});

// post a stock order
app.post("/api/orders", (req, res) => {
  const order = {};
});

// update a stock order
app.put("/api/orders/:id", (req, res) => {
  const id = req.params.id;
});
// delete a stock order
app.delete("/api/orders/:id", (res, req) => {});

// webserver port
app.listen("3000");
