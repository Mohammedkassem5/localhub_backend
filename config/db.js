import mongoose from "mongoose";
import  dotenv from "dotenv"

dotenv.config()

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
console.log("databass secc")
    }catch(err){
        console.err("database err",err.massage)
        process.exit(1)
    }
}
export default connectDB