"use server";
import { revalidatePath } from "next/cache";
import User from "./models/userModel";
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
  const newUser = new User({
    username,
    email,
    password,
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