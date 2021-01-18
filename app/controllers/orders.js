"use strict"

const { json } = require("body-parser");
const Order = require("../models/orders");

module.exports = {
  createOrder: createOrder,
  getOrders: getOrders,
  getOrderById: getOrderById
}

function createOrder(req, res, next) {
  const order = new Order(req.body);

  order.save(function(err, result) {
    if(err) {
      return next(err);
    }
    req.resources.orders = result;
    return next();
  })
}

function getOrders(req, res, next) {
  Order
    .find()
    .populate("userId", "email")
    .exec(function(err, result) {
      if(err) {
        return next(err);
      }
      req.resources.orders = result;
      return next();
    })
}

function getOrderById(req, res, next) {
  const { orderId } = req.params;
  Order.findById({_id: orderId}, function(err, result) {
    if (err) {
      return next(error);
    }
    req.resources.orders = result;
    return next();
  })
}
 