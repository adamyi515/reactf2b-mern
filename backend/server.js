import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// Connection to DB.
import connectDB from './config/db.js';
connectDB();


const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
})