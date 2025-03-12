import express from 'express';
import authRoutes from "./routes/auth.routes.js";
import dotenv from 'dotenv';
import connectDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const PORT = process.env.PORT||5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`Running on : ${PORT}`);
    connectDB();
})