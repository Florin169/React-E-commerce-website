import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://Florin:florin169@test.swa7g.mongodb.net/test?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(`Connected to MongoDB: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
