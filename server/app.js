require("dotenv").config();
const express = require("express");
const conn = require("./config/database")
const app = express();

const PORT = process.env.PORT

conn();

app.get("/", (req, res)=>{
    res.json({message : "Hi from server!"})
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})