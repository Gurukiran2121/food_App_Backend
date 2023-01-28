const express = require("express");
const prodrouter = express.Router();
const productslist = require("../models/products");
const catagories = require("../models/catagories");

const getproduct = async () => {
  try {
    const product = await productslist.find();
    if (product) {
      global.productslistt = product;
    } else {
      console.log("error occured");
    }
    const catagory = await catagories.find();
    if (catagory) {
      global.catagory_list = catagory;
    } else {
      console.log("error occured");
    }
  } catch (error) {
    console.log(error);
  }
};

getproduct();

prodrouter.get("/products", (req, resp) => {
  try {
    resp.send([global.productslistt, global.catagory_list]);
  } catch (error) {
    resp.status(422).json({ error: "problem in fetching data from database" });
  }
});

module.exports = prodrouter;
