
import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"Please enter your username"],
    min:3,
    max:20
  },
  email:{
    type:String,
    required:[true,"Please enter your email"],
    unique:true,
  },
  password:{
    type:String,
    required:[true,"Please enter your password"],
    min:6
  },
  image:{
    type:String,
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  isActive:{
    type:Boolean,
    default:true
  },
  phone:{
    type:String,
  },
  address:{
    type:String,
  }
},{timestamps:true});


const userModel = mongoose.models.User ||  mongoose.model("User",userSchema);
export default userModel;