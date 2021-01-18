"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
const { userModel, orderModel } = require("../constants");

const orderSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  value: {
    type: Number,
    required: [true, "Order value is required"],
    unique: false
  },
  description: {
    type: String,
    required: [true, "Order description is required"],
    unique: false
  },
  userId: {
    type: ObjectId,
    ref: userModel, 
    required: [true, "UserId is required"]
  },
  products: [
    {
      name: {
        type: String
      },
      price: {
        type: Number
      }
    }
  ]
}, { timestamps: {
  currentTime: () => new Date().getTime()
}})

module.exports = mongoose.model(orderModel, orderSchema, "orders");