const item = require("./item");
const cart = require("./addToCart");
const getCarts = require("./Carts")
var express = require("express");

var api = express();

api.get("/api/item/allItems", item.getAllItems);
api.post("/api/cart/addToCart", cart.addToCart);
api.get("/api/getcart/allCarts/:id", getCarts.getAllCarts);


module.exports = api;
