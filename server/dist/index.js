import "./loadEnv.js";
import "./db/conn.js";
import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat-routes.js";
const app = express();
const port = process.env.PORT;
app.use(express.json());
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/chat", chatRouter);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
