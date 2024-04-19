"use server";
import { revalidatePath } from "next/cache";
import User from "./models/userModel";
import Product from "./models/productModel";
import { redirect } from "next/navigation";
const { connectDB } = require("./utils");

export const addNewUser = async (formData)=>{
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const isAdmin = formData.get("isAdmin");
  const isActive = formData.get("isActive");
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password,salt);
  const newUser = new User({
    username,
    email,
    password:hashPassword,
    phone,
    address,
    isAdmin,
    isActive
  });
  await newUser.save();
  try{
    connectDB();
  }catch(err){
    console.log(err);
    throw new Error("failed to created user")
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users")
}

export const addNewProduct = async(formData)=>{
  const title = formData.get("title");
  const desc = formData.get("desc");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const cat = formData.get("cat");
  const color = formData.get("color");
  const size = formData.get("size");
  
  const newProduct = new Product({
    title,
    desc,
    price,
    stock,
    cat,
    color,
    size
  });
  await newProduct.save();
  try{
    connectDB();
  }catch(err){
    console.log(err);
    throw new Error("failed to created product")
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products")
}

export const deleteProduct = async (formData)=>{
  const id = formData.get("id");
  try{
    connectDB();
    await Product.findByIdAndDelete(id);
  }catch(err){
    console.log(err);
    throw new Error("failed to delete product");
  }
  revalidatePath("/dashboard/products")
}

export const fetchUser = async (id)=>{
  try{
    connectDB();
    const user = await User.findById(id);
    if(!user){
      redirect("/dashboard/users");
    }
    return user;
  }catch(err){
    console.log(err);
    throw new Error("failed to fetch user");
  }

}
export const deleteUser = async (formData)=>{
  const id = formData.get("id");
  try{
    connectDB();
    await User.findByIdAndDelete(id);
  }catch(err){
    console.log(err);
    throw new Error("failed to delete user");
  }
  revalidatePath("/dashboard/users")
}

export const fetchProduct = async (id)=>{
  try{
    connectDB();
    const product = await Product.findById(id);
    if(!product){
      redirect("/dashboard/products");
    }
    return product;
  }catch(err){
    console.log(err);
    throw new Error("failed to fetch product");
  }

}

export const updateUser = async (formData)=>{
  const {id,username,email,password,phone,address,isAdmin, isActive} = Object.fromEntries(formData);
  try{
    connectDB();
    const updatedFields = {
      id,username,email,password,phone,isAdmin,isActive
    };
    Object.keys(updatedFields).forEach((key)=> (updatedFields[key] === undefined) && delete updatedFields[key]);
    await User.findByIdAndUpdate(id,updatedFields);
    
  }catch(err){
    console.log(err);
    throw new Error("failed to updated user");
  }
}

export const updateProduct = async (formData)=>{
  const {title,desc,price,cat,stock,color,size} = Object.fromEntries(formData);
  try{
    connectDB();
    const updatedFields = {
    title,desc,price,cat,stock,color,size
  }
  Object.keys(updatedFields).forEach((key)=> (updatedFields[key] === undefined) && delete updatedFields[key]);
  await Product.findByIdAndUpdate(id,updatedFields);}
catch(err){
  console.log(err);
    throw new Error("failed to updated product");
}
}