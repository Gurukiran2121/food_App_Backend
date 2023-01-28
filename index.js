const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })
require("./models/dbconnec")
const express = require("express")
const app = express()
const userrouter = require("./routes/userroot")
const prodrouter = require("./routes/product")

const cors = require('cors')
const port = process.env.PORT || 7800


app.use(express.json())
app.use(cors())
app.use(userrouter)
app.use(prodrouter)


app.listen(port, () => {
    console.log(`port started at ${port}`);
})
