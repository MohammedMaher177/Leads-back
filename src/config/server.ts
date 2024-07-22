import dotenv from "dotenv";
import express, { Express } from "express";
import { VercelRequest, VercelResponse } from '@vercel/node';

dotenv.config();
import bootstrap from "./bootstrap";
const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3003;

bootstrap(app);

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
