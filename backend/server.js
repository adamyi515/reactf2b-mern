import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import { errorHandler } from './middleware/errorHandler.js';

app.use(express.json());

// Routes
import userRoutes from './routes/userRoutes.js';

// Connection to DB.
import connectDB from './config/db.js';
connectDB();


// Routes /////////////////////////////////////////////////////////////////////////////////
app.use('/api/v1/users', userRoutes);



// Middlewares
app.use(errorHandler);



const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
})