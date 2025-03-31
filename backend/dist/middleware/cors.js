"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = void 0;
const cors = require("cors");
const corsMiddleware = () => cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:8080",
            "http://localhost:5173",
        ];
        if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
});
exports.corsMiddleware = corsMiddleware;
