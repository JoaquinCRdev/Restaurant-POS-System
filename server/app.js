require("dotenv").config();
const express = require("express");
const conn = require("./config/database")
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const app = express();

// const createHttpError = require("http-errors")

const PORT = config.port
conn();

//Root Endpoint
app.get("/", (req, res)=>{

    // const err = createHttpError(404, "something went wrong!")
    // throw err

    res.json({message : "Hi from server!"})
})

//Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})