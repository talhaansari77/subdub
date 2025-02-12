import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error("must define mongodb uri env var inside .env local/pro")

}
const connectToDatabase =async()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log("NODE ENV"+NODE_ENV)
    } catch (error) {
        console.log('error'+error)
        process.exit(1)
    }
}


export default connectToDatabase;