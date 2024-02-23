import mongoose from 'mongoose';

import { DB_NAME } from '../constants.js';

const connectDB =async ()=>{
    try {
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        // const connectionInstance = await mongoose.connect("mongodb+srv://priyavrathtiwariluck:Arjun1234@cluster0.picfrpg.mongodb.net") 
        // in case above method doesn't work just pass the string here
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB