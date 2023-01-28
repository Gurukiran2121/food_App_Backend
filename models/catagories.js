const mongoose = require("mongoose")
const catagories = new mongoose.Schema({
    CategoryName: String
})
module.exports = mongoose.model('product_catagories' , catagories)