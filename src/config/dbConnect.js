import mongoose, {mongo} from "mongoose";

async function conctaNaDataBase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conctaNaDataBase;

