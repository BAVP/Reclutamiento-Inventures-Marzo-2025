import express from "express";
import path from "path";
import mongoose from "mongoose";
import serverless from "serverless-http";

// =================== Basic server configuration ============================= //
const app = express();

// Database Configuration
mongoose
  .connect(process.env.DATABASE_URL!, {})
  .then(() => console.log("[MongoDB] Connected"))
  .catch((error) => console.error("[MongoDB - Error]", error));

const db = mongoose.connection;
db.on("error", (error) => console.error("[MongoDB - Error]", error));
db.on("disconnected", () => console.log("[MongoDB] Disconnected"));

// ======================= Middleware Configuration ========================== //
app.use(express.json());
app.use((req, res, next) => {
  // CORS middleware if you have it
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ================= Basic frontend configuration ============================= //
app.use(express.static(path.join(__dirname, "../../build")));

// ================================ ROUTES ===================================== //
// Backend
import { urlRouter } from "../../src/routes/urlRoutes";
app.use("/api/urls", urlRouter);

// Redirect to react
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../backend/build", "index.html"));
});

module.exports.handler = serverless(app);
