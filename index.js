import express from "express";
import cors from 'cors';
import appRouter from "./routes/index.js";
import { config } from "dotenv";
import { connectToDatabase } from "./db/index.js";
const app = express();

config(); // Load environment variables

//#region middlewares
app.use(express.json());

app.use("/api/v1/items", appRouter)

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

