import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  console.log("hello world");
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log("Hello test");
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
