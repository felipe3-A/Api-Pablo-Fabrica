import express  from "express";
import indexRouter from './routes/indexRouter.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use('/api',indexRouter)
app.use('/api',userRoutes)

export default app;