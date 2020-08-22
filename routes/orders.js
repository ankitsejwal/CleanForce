const express = require("express");
const order = require("../models/order");
const router = express.Router();

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

// get all stock orders
router.get("/", (req, res) => {
  res.send(stock);
});

// get a stock order
router.get("/:id", (req, res) => {
  const id = req.params.id;
});

// post a stock order
router.post("/", (req, res) => {
  const order = {};
});

// update a stock order
router.put("/:id", (req, res) => {
  const id = req.params.id;
});
// delete a stock order
router.delete("/:id", (res, req) => {});

module.exports = router;
