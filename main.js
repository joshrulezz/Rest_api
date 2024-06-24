import express from "express";
import movieRoutes from "./routes/movies.route.js";
const app = express();
const PORT = 6969;
app.get('/' , (req , res) => {
    res.json({msg : "Hello Joshua!"});
});


app.use("/movies" , movieRoutes);




app.listen(PORT  , () => {
    console.log(`The server is running at http://127.0.0.1:${PORT}`);
});

