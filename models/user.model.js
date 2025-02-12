import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({

    name:{
        type:String,
        required:[true, 'name is required'],
        trim:true,
        minLength:2,
        maxLength:30
    },
    email:{
        type:String,
        required:[true, 'name is required'],
        unique:true,
        lowercase:true,
        trim:true,
        match:[/\S+@\S+\.\S+/,'please enter a valid email address']
    },
    password:{
        type:String,
        required:[true, 'name is required'],
        minLength:6,

    },
},{timestamps:true});


const User = mongoose.model('User',userSchema);


export default User;