import mongoose from "mongoose";


const DBconnection = async () =>{
    const MONODB_URI = `mongodb://kirankorrapolu:WoiuCi0cdoq6zAgP@file-sharing-shard-00-00.i5pno.mongodb.net:27017,file-sharing-shard-00-01.i5pno.mongodb.net:27017,file-sharing-shard-00-02.i5pno.mongodb.net:27017/?ssl=true&replicaSet=atlas-gppn81-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing`;
    try {
        await mongoose.connect(MONODB_URI);
        console.log('MongoDB connected');
    } catch (error){
        console.error('Error while connecting with database', error.message);
    }
}

export default DBconnection;