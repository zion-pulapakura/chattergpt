import "./loadEnv.js";

import express from "express";
import cors from "cors";
import chatRouter from "./routes/chatRoutes.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const port = process.env.PORT;

app.use("/chat", chatRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
