import mongoose from "mongoose";


const DBconnection = async () =>{
    const MONODB_URI = ``;
    try {
        await mongoose.connect(MONODB_URI);
        console.log('MongoDB connected');
    } catch (error){
        console.error('Error while connecting with database', error.message);
    }
}

export default DBconnection;