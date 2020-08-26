const express = require("express");
const stockOrder = require("../models/order");
const router = express.Router();

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
