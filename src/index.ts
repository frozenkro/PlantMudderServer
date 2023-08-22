import express from 'express';
import alertRouter from './controllers/alertController';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());
app.use('/alert', alertRouter);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
