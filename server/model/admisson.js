const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const admissionSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  nationality: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  mobile:{
    type:String,
    required: true
  },
  admissionForm:{
    type:String, enum:['Engineering', 'MBA']
  }
});

const admission =  mongoose.model.admission || mongoose.model('admission', admissionSchema);

module.exports = admission;


