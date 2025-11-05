import express from "express";
import { rateLimit } from 'express-rate-limit';
const app = express();

const limit  = rateLimit({
    windowMs: 15 * 60 * 1000, 
	limit: 100,
	standardHeaders: 'draft-8', 
	legacyHeaders: false, 
	ipv6Subnet: 56,
})
app.use(express.json());
app.use(limit);
app.get("/", (req, res) => {
    res.send("welcome to the server of home owner app");
});

export default app;