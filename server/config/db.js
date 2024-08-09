const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const url = process.env.MONGOURL

const db = async()=>{

    try {
        
           await mongoose.connect(url)
            console.log("coonection sucess fully database ")
        
    } catch (error) {
        console.log(error, "failed connection")
        
    }
} 

module.exports = db