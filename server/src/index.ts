import "./loadEnv.js";

import express from "express";
import chatRouter from "./routes/chatRoutes.js";

const app = express();
app.use(express.json())

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express + TypeScript server");
});

app.use('/chat', chatRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
