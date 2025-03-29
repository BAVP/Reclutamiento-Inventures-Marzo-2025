import express, { Application } from 'express'
import { corsMiddleware } from './middleware/cors';
const mongoose = require('mongoose');

// Basic server configuration
const app: Application = express()
const port = process.env.PORT || 3000;

app.disable("x-powered-by")
app.use(express.json())
app.use(corsMiddleware())

// Mongoose connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log('[MongoDB] Connected '))
  .catch((error: any) => console.error('[MongoDB - Error]', error));


// Handle events
const db = mongoose.connection;
db.on('error', (error: any) => console.error('[MongoDB - Error]', error));
db.once('open', () => console.log('[MongoDB] Connected'));
db.on('disconnected', () => console.log('[MongoDB] Disconnected'));

// Routes
import { urlRouter } from "./routes/urlRoutes"
app.use("/url", urlRouter)


// Base url
app.get("/", (req, res) => {
	res.send("Hola mundo!")
})

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Release mongoose resources
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection is disconnected due to application termination');
        process.exit(0);
    });
});