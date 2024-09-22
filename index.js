import express from "express";
import cors from 'cors';
import appRouter from "./routes/index.js";
import { config } from "dotenv";
import { connectToDatabase } from "./db/index.js";
const app = express();

// CORS configuration
/*const corsOptions = {
  origin: 'http://localhost:8787', // Allow only your frontend origin
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Use CORS middleware
app.use(cors(corsOptions));
 */
config(); // Load environment variables 

//#region middlewares 
app.use(express.json()); 
app.get('/', (req, res) => {
    res.send('Hello World! Your server is running.');
  });
app.use("/api/items", appRouter)

const PORT = process.env.PORT || 5000;

//#region DB Connetion
connectToDatabase()
    .then(()=>{
        app.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`));
    })
    .catch((err) => {
        console.log("Error connecting to mysql. Error = ", err);
        process.exit(0);
    });

