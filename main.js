import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";
const app = express();
const PORT = 6969;

// DATA UNDERSTANDING MIDDLEWARE..(understands the data sent from postman or frontend in terms of json)
app.use(express.json());

connectDB();
app.use("/movies" , movieRoutes);


app.listen(PORT  , () => {
    console.log(`The server is running at http://127.0.0.1:${PORT}`);
});

