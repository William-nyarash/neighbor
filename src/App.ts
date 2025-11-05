import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to the server of home owner app");
});

export default app;