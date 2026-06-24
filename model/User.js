import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["superadmin","admin","editor"],
    },
    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending",
    },
    refreshToken:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    },
},
{
    timestamps:true,
    
})

const user=mongoose.model("User",userSchema)
export default user;