const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    CategoryName: String,
    name: String,
    img: String,
    options: Array,
    description: String
})
module.exports =  mongoose.model("products", productSchema)



