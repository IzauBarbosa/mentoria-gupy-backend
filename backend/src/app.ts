import express, { Express } from 'express';
import { Routes } from './routes';

class App {
  public app: Express;
  public route: Routes;

  constructor() {
    this.app = express();
    this.route = new Routes();
    this.route.routes(this.app);
  }
}

export default new App().app;