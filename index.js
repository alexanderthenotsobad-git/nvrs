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
  res.send(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NVRS Home Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2 {
            color: #2c3e50;
        }
        .tech-list {
            background-color: #f4f4f4;
            padding: 20px;
            border-radius: 5px;
        }
        .tech-list h3 {
            margin-top: 0;
        }
        .logo {
            max-width: 100px;
            max-height: 100px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <h1>NVRS Project: Backend and Frontend Journey</h1>
    
    <p>Welcome to my blog post about the NVRS (Node.js Virtual Restaurant System) project. You can check out the live application at <a href="https://vrsprototype.com">https://vrsprototype.com</a>. This URL leads to the home page of the actual app.</p>

    <h2>Backend Project</h2>
    <p>The backend of the NVRS project is built with a focus on robustness and scalability. Here's a breakdown of the technologies used:</p>
    
    <div class="tech-list">
        <h3>Backend Technologies:</h3>
        <ul>
            <li>MySQL Docker Image </li>
            <li>Apache Web Server for Reverse Proxy and CORS</li>
            <li>Node.js Data Server</li>
            <li>Express.js for Route Handlers and Middleware</li>
            <li>REST API Architecture</li>
        </ul>
    </div>

    <h2>Frontend Project</h2>
    <p>The frontend journey of NVRS has been an interesting one, with some unexpected turns:</p>

    <div class="tech-list">
        <h3>Frontend Technologies:</h3>
        <ul>
            <li>Hono.js for server-side rendering</li>
            <li>EJS (Embedded JavaScript) for templating</li>
            <li>Vanilla JavaScript for client-side interactivity</li>
            <li>CSS for styling</li>
        </ul>
    </div>

    <h2>The Next.js to Hono Journey</h2>
    <p>Initially, I had ambitious plans for the frontend using Next.js deployed on Cloudflare Workers with Wrangler. However, this led to some unforeseen complications:</p>

    <ul>
        <li>Next.js, while powerful, proved to be overly complex for the immediate needs of the project.</li>
        <li>Cloudflare Wrangler integration posed unexpected challenges, creating a deployment bottleneck.</li>
        <li>The combination of Next.js and Cloudflare Workers introduced performance issues that were difficult to resolve quickly.</li>
    </ul>

    <p>As a result, I made the strategic decision to simplify the frontend approach:</p>

    <ul>
        <li>Adopted Hono.js, a lightweight and fast web framework that's well-suited for serverless environments.</li>
        <li>Integrated EJS for server-side templating, allowing for dynamic content generation with a gentler learning curve.</li>
        <li>This "downgrade" in frontend complexity actually resulted in an upgrade in development speed and ease of deployment.</li>
    </ul>

    <p>While this shift required adjusting the initial vision, it has ultimately led to a more manageable and efficient development process, allowing for quicker iterations and easier maintenance.</p>

    <h2>Conclusion</h2>
    <p>The NVRS project demonstrates the importance of flexibility in web development. By adapting our technology stack to meet the project's needs, we've created a robust and efficient system that balances performance with ease of development. The technology is also well-adapted for ease of configuration, management, and scaling.</p>

    <p>Stay tuned for more updates as we continue to evolve and improve the NVRS platform!</p>

    <!-- Note: As an AI, I can't actually find or include images. You would need to add the image tags and source them yourself. Here's an example of how you might include logos: -->
    <!--
    <div>
        <img src="path_to_mysql_logo.png" alt="MySQL Logo" class="logo">
        <img src="path_to_apache_logo.png" alt="Apache Logo" class="logo">
        <img src="path_to_hono_logo.png" alt="Hono.js Logo" class="logo">
    </div>
    -->
</body>
</html>
  `);
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

