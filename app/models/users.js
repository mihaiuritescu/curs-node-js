"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { userModel } = require("../constants");

const userSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  email: {
    type: String,
    required: [true, "User email is required"],
    unique: true
  },
  name: {
    type: String,
    required: [true, "User name is required"],
    unique: false
  },
  address: {
    streetName: {
      type: String
    },
    streetNumber: {
      type: String
    },
    city: {
      type: String
    }
  }
}, { timestamps: {
  currentTime: () => new Date().getTime()
}})

module.exports = mongoose.model(userModel, userSchema, "users");