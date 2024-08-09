const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const admssionSchema = new Schema({
    name:{
        type: String,
        required: true

    },

})

module.exports = mongoose.model("Admssion", admssionSchema)
