import Movie from "../models/movie.model.js";

export const movieIndex = (req , res) => {
    res.send("get all the movies !");
}
export const movieCreate = async(req , res) => {
     //Creating new data and adding in the type of mongo db schema model type 
     
    const newMovie = new Movie({
        id : req.body.id , 
        name : req.body.name , 
        friend : req.body.friend
    });

    try { 
    const movie = await newMovie.save();
    return res.status(201).json(movie);
    }
    catch(error){
        res.status(400);
    }

    console.log(req.body);
    res.json(req.body);
}

export const movieUpdate = (req , res) => {
    res.send("Movie has been updated ");
}

export const movieDelete = (req , res) => {
    res.send("Movie has been deleted ");
}
