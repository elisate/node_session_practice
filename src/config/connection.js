import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection_string=process.env.CONNECTION_URL;

const connectDb=async()=>{
try{
await mongoose.connect(connection_string)
    console.log("db connected successfully")
}
catch(error){
console.log(error);

}
}
export default connectDb;