import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    fammems:{
        type: String,
        required: true
    }
})


export default mongoose.model("User", userSchema);