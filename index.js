import express from "express";
import cors from 'cors';
import path from 'path';
import appRouter from "./routes/index.js";
import { config } from "dotenv";
import { connectToDatabase } from "./db/index.js";

const app = express();
const __dirname = path.resolve();

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.json());

// CORS configuration (uncomment if needed)
/*
const corsOptions = {
  origin: 'http://localhost:8787', 
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
*/

config(); // Load environment variables

// Serve the main index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.use("/api/items", appRouter);

const PORT = process.env.PORT || 5000;

// Database connection and server start
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
  })
  .catch((err) => {
    console.log("Error connecting to mysql. Error = ", err);
    process.exit(0);
  });