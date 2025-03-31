import express, { Application } from "express";
import path from "path";
import { corsMiddleware } from "./middleware/cors";
import mongoose from "mongoose";

// =================== Basic server configuration ============================= //
const app: Application = express();
const port = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json());
app.use(corsMiddleware());

// ================= Basic frontend configuration ============================= //
app.use(express.static(path.join(__dirname, "build")));

// ======================= Database Configuration ============================= //
mongoose
  .connect(process.env.DATABASE_URL!, {})
  .then(() => console.log("[MongoDB] Connected "))
  .catch((error: any) => console.error("[MongoDB - Error]", error));

// Handle events
const db = mongoose.connection;
db.on("error", (error: any) => console.error("[MongoDB - Error]", error));
db.on("disconnected", () => console.log("[MongoDB] Disconnected"));

// ================================ ROUTES ===================================== //
// Backend
import { urlRouter } from "./routes/urlRoutes";
app.use("/api/urls", urlRouter);

// Frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Release mongoose resources
process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log("[MongoDB] Disconnected due to application termination");
    process.exit(0);
  } catch (err) {
    console.error(
      "[MongoDB - Error] Error while closing Mongoose connection:",
      err
    );
    process.exit(1);
  }
});
