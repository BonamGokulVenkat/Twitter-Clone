import express from 'express';
import authRoutes from "./routes/auth.routes.js";
import dotenv from 'dotenv';
import connectDB from './db/connectMongoDB.js';

dotenv.config();

const PORT = process.env.PORT||5000;

const app = express();

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`Running on : ${PORT}`);
    connectDB();
})