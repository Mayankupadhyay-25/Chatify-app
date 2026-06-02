import express from "express";
import dotenv from "dotenv";
import Path from "path";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const __dirname = Path.resolve();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(Path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
        res.sendFile(Path.join(__dirname, "../client", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
    connectDB();
});

export default app;
