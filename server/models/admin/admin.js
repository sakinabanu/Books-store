import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 2,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

// Custom Name, Schema Name,  Colletion Name
const adminModel = mongoose.model("Admins", adminSchema, "admins");

export default adminModel;