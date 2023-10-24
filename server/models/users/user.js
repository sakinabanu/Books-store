import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
const userModel = mongoose.model("Users", userSchema, "users");

export default userModel;
