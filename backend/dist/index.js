"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = require("./middleware/cors");
const mongoose_1 = __importDefault(require("mongoose"));
// =================== Basic server configuration ============================= //
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.disable("x-powered-by");
app.use(express_1.default.json());
app.use((0, cors_1.corsMiddleware)());
// ================= Basic frontend configuration ============================= //
app.use(express_1.default.static(path_1.default.join(__dirname, "build")));
// ======================= Database Configuration ============================= //
mongoose_1.default
    .connect(process.env.DATABASE_URL, {})
    .then(() => console.log("[MongoDB] Connected "))
    .catch((error) => console.error("[MongoDB - Error]", error));
// Handle events
const db = mongoose_1.default.connection;
db.on("error", (error) => console.error("[MongoDB - Error]", error));
db.on("disconnected", () => console.log("[MongoDB] Disconnected"));
// ================================ ROUTES ===================================== //
// Backend
const urlRoutes_1 = require("./routes/urlRoutes");
app.use("/api/urls", urlRoutes_1.urlRouter);
// Frontend
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "frontend/build", "index.html"));
});
// Start server
app.listen(port, () => {
    console.log(`Server running at ${process.env.DOMAIN}:${port}`);
});
// Release mongoose resources
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connection.close();
        console.log("[MongoDB] Disconnected due to application termination");
        process.exit(0);
    }
    catch (err) {
        console.error("[MongoDB - Error] Error while closing Mongoose connection:", err);
        process.exit(1);
    }
}));
