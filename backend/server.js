import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// Routes
import userRoutes from './routes/userRoutes.js';

// Middlewares
app.use(express.json());

// Connection to DB.
import connectDB from './config/db.js';
connectDB();


// Routes /////////////////////////////////////////////////////////////////////////////////
app.use('/api/v1/users', userRoutes);




const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
})