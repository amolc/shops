const item = require("./item");
const cart = require("./addToCart");
var express = require("express");

var api = express();

api.get("/api/item/allItems", item.getAllItems);
api.post("/api/cart/addToCart", cart.addToCart);

module.exports = api;
