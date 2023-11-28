import mongoose from 'mongoose';



export const Connection = async (URL) => {
    
    try {
        await mongoose.connect(URL);
        console.log('MongoDB is connected...');
    } catch (err) {
        console.log('Error while connecting to MongoDB', err);
    }
};

export default Connection;


