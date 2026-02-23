const mongoose = require("mongoose");

const conn = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongoDB is connected: ${conn.connection.host}`)
    } catch (e) {
        console.log(`Error connecting mongoDB: ${e.message}`)
        process.exit();
    }
}

module.exports = conn;