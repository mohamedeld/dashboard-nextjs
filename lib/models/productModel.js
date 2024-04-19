
import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,"Please enter product title"],
  },
  desc:{
    type:String,
    required:[true,"Please enter product description"],
    
  },
  price:{
    type:Number,
    required:[true,"Please enter product price"],
    min:0
  },
  stock:{
    type:Number,
    required:[true,"Please enter stock number"],
    min:0
  },
  cat:{
    type:String
  },
  image:{
    type:String
  },
  color:{
    type:String,
  },
  size:{
    type:String,
  }
},{timestamps:true});


const productModel = mongoose.models.Product ||  mongoose.model("Product",productSchema);
export default productModel;