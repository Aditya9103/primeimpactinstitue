import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import { ENV } from './config/env.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import demoRoutes from './routes/demoRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';

// Connect to Database
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: [
        ENV.CLIENT_URL,
        ENV.CLIENT_URL ? ENV.CLIENT_URL.replace(/\/$/, "") : "",
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    credentials: true,
}));

if (ENV.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Routes
app.get('/', (req, res) => {
    res.send('Prime Impact API is running on root......');
});

app.get('/api', (req, res) => {
    res.send('Prime Impact API is running.....');
});

// Setup API Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/demo', demoRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = ENV.PORT;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in ${ENV.NODE_ENV} mode on port ${PORT}`);
});
