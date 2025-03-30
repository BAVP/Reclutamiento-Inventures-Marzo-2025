const cors = require("cors");

export const corsMiddleware = () =>
  cors({
    origin: (origin: string, callback: any) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:8080",
      ];

      if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  });
