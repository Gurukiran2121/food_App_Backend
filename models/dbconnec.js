const mongoose = require("mongoose")
const db = process.env.MONGO_URL

mongoose.connect(db, {
    useNewUrlParser : true,
})
    .then(() => {
    console.log("database connected succesfully");
    })
    .catch(() => {
    console.log("error occured while connecting to database");
})