import Movie from "../models/movie.model.js";

export const movieIndex = async(req , res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    }
    catch(error){
        res.status(500);
    }
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
export const movieSearch = async(req , res) => {
    try{
    const movie = await Movie.findById(req.params.id); // Searching the respective id of the movie..
    if(movie == null){
        res.status(500);
    }
    else{
        res.json(movie);
     }
    }
    catch(error){
        res.status(401);
    }
}
export const movieUpdate = async (req , res) => {
    try{
    const result = await Movie.findOneAndUpdate(
        {_id : req.params.id} , 
        {
            name : req.body.title ,     
            friend : req.body.friend,
        },
    );
    res.status(200).json(result);
}
catch(error){
    res.status(500);
}
}

export const movieDelete = async (req , res) => {
    const movieId = req.params.id ; 


    try{
        await Movie.deleteOne({_id : movieId});
        res.json({message : "movie deleted !"});
    }
    catch(error){
        res.status(400);

    }
}
