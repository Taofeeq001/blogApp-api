require('dotenv').config();
const mongose = require("mongoose")

const db_url = process.env.DB_URL

// console.log(db_url)
const connectDB = async ()=>{
    await mongose.connect(db_url)
}


module.exports = connectDB;