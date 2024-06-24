import express from "express";
import { movieIndex , movieCreate , movieDelete , movieUpdate} from "../controllers/movies.controller.js";
const router = express.Router();


//CRUD FOR MOVIES 

router.get("/" , movieIndex); // routing the incoming request to controller from this file !

router.post("/" , movieCreate);

router.put('/:id' , movieUpdate);

router.delete('/:id', movieDelete);

export default router;


//ScGKkdmlgAGDH1KY
//catherineleela8

//mongodb+srv://catherineleela8:ScGKkdmlgAGDH1KY@cluster0.q6jvezk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0