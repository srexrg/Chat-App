import path from "path";
import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";


dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors())
const port = process.env.PORT || 3000;


const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(port, (req, res) => {
  connectDB();
  console.log(`Sever conncted on ${port}`);
});
