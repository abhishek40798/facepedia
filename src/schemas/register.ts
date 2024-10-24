import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true, 
        trim: true, 
        match: /.+\@.+\..+/ 
    },
    password: {
        type: String,
        required: true,
        minlength: 8, 
    },
    image: {
        type: String,
        default: null,
    }
},{timestamps:true,versionKey:false});

export const userModel = mongoose.models.User || mongoose.model("User", userSchema);
