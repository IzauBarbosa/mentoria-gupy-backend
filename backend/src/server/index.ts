import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 8000;

app.get('/hello', (req: Request, res: Response) => {
  const { name } = req.query;
  const response = { message: `Hello, ${name}` };
  res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});