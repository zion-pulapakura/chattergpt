import "./loadEnv.js";
import express from "express";
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Express + TypeScript server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
