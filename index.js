require('dotenv').config()
const express = require("express");
const connectDB = require('./ConnetDB/Connect');
const app = express();
const port = process.env.Server_PORT
const bodyParser = require('body-parser')
const router = require("./Router/Route")

//body parser here
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/v1/", router)
const start = async ()=>{
    try {
        await connectDB()
        app.listen(port, ()=>{
            console.log("DB connected successfully")
            console.log(`This app is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start();
