import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ramsaloke117:ramsaloke117@cluster0.jcpbh.mongodb.net/"
    );
    console.log("mongodb connected successfully")
  } catch (e) {
    console.log("mongoDB connection failed", e);
    process.exit(1);
  }
};

export default connectToDB;
