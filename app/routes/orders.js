"use strict"

const express = require("express");
const router = express.Router();
const orderCtrl = require("../controllers/orders");
const helperCtrl = require("../helpers");

router.get("/orders", 
  orderCtrl.getOrders,
  helperCtrl.responseToJson("orders")
)

router.get("/orders/:orderId", 
  orderCtrl.getOrderById,
  helperCtrl.responseToJson("orders")
)

router.post("/orders", 
  orderCtrl.createOrder,
  helperCtrl.responseToJson("orders")
)

module.exports = router;