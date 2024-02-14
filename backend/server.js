import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectDB from "./db/db.js";

dotenv.config();
const app = express();

app.use(express.json());



const port = process.env.PORT || 3000;



app.use("/api/auth",authRoutes)



app.listen(port,(req,res)=>{
  connectDB();
  console.log(`Sever conncted on ${port}`)
})