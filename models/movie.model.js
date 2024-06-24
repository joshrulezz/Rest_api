
import {Schema , model} from "mongoose";

const schema = new Schema({
    id : String , 
    name : String , 
    friend : String ,
});

const Movie = model("Movie" , schema);

export default Movie;
