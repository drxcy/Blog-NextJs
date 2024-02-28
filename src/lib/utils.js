import mongoose from "mongoose";

const connection ={};
export const connectToDB= async()=>

{
    try
    {
        if(connection.isConnected){
            console.log("Connected to MongoDB");
            return;
        }
       const db= await mongoose.connect(process.env.MONGO);
       connection.isConnected=db.connections[0].readyState;
    } 
    catch(err)
    {
        console.log(err);
        throw new Error("Could not connect");
    }
};