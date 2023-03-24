const mongoose=require('mongoose')
 const dbUri='mongodb://127.0.0.1:27017/assa'
 const connectDB = async () => {
    try {
      const conn = await mongoose.connect(dbUri, {
        useNewUrlParser: true,
      });
      
      console.log(`MongoDB Connected:${conn.connection.host}`);
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports = connectDB;