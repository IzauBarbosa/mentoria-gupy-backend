import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/hello', (req: Request, res: Response) => {
  const { name } = req.query;
  const response = { message: `Hello, ${name}` };
  res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});