import mongoose from "mongoose";
const uri = process.env.DB_CONNECT || "";
try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
}
catch (e) {
    console.error("Error connecting to MongoDB", e);
    throw e;
}
