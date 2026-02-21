import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import subjectsRouter from './routes/subjects';
const app = express();
const PORT = 8000;


const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:3000';

if (!process.env.FRONTEND_URL) {
    console.warn('FRONTEND_URL is not defined, using fallback: http://localhost:3000');
}


app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json());

app.use('/api/subjects',subjectsRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


