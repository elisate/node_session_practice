import User from "../model/userModel.js";
import {accessToken} from "../utils/genereteToken.js";
import bcrypt from "bcrypt";

export const register=async(req,res)=>{
    try{
const {FirstName,LastName,email,password,userRole}=req.body;
if(!FirstName || !LastName || !email || !password){
    return res.status(400).json({message:"All fields are required"});
}

const existingUser= await User.findOne({email});
if(existingUser){
    return res.status(400).json({message:"User already exists"});
}
const hashedPassword= await bcrypt.hash(password,10);
const newUser= new User({
    FirstName,
    LastName,
    email,
    password:hashedPassword,
    userRole
});
await newUser.save();
const token=accessToken(newUser);


return res.status(201).json({newUser,token, message:"User registered successfully"});

    }
    catch(error){
        return res.status(500).json({error,message:"Internal server error"});
    }

}

export const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const userEmail=await User.findOne({email});
        const userPassword=await User.findOne({password});
        if(!userEmail && !userPassword){
            return res.status(400).json({message:"Invalid email or password "});

            console.log(userEmail);
        }
     
        const token=accessToken(userEmail);

        const loggedInUser={
            id:userEmail._id,
            email:userEmail.email,
            userRole:userEmail.userRole,
            FirstName:userEmail.FirstName,
            LastName:userEmail.LastName,
        }

        res.status(200).json({token, loggedInUser, message:"Login successful"});
    }
    catch(error){
        return res.status(500).json({error,message:"Internal server error"});
    }

}