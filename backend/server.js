import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"; 
import userRoutes from "./routes/user.routes.js"; 
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser"
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser())
const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(port, (req, res) => {
  connectDB();
  console.log(`Sever conncted on ${port}`);
});
