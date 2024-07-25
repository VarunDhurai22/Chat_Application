import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js"
const app = express()

dotenv.config();
app.use(express.json());

app.use(cors());

const URI = process.env.MONGODB_URI

try {
  mongoose.connect(URI);
  (console.log("connected to MongoDB"));

} catch (error) {
  console.log(error);
}
app.use("/user", userRoute);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});