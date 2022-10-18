import { Express, Request, Response } from 'express';

class Routes {
  public routes(app: Express): void {
    app.route('/hello')
      .get((req: Request, res: Response) => {
        const { name } = req.query;
        const response = { message: `Hello, ${name}` };
        res.status(200).send(JSON.stringify(response));
      });
  }
}

export { Routes };