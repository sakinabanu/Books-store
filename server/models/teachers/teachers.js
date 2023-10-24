import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
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
const teacherModel = mongoose.model("teacher", teacherSchema, "teachers");

export default teacherModel;
