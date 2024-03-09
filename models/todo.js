import mongoose from "mongoose";

// creating schema 
const todoSchema = new mongoose.Schema({
        descreption: {
            type:String,
            minlength: 5,
            maxLength: 255,
            required:true
        }
}, {
    timestamps: true
})

//create todo object  by using the schema
const todo =  mongoose.model("Todo", todoSchema);

export default todo;