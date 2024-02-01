import express from 'express';
import expenseRouter from './routes/expenseRoutes';


const app = express();

app.use(express.json());
app.use('/expense', expenseRouter)

export default app;
