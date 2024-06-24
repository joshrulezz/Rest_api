import express from "express";
import { movieIndex , movieCreate , movieDelete , movieUpdate} from "../controllers/movies.controller.js";
const router = express.Router();


//CRUD FOR MOVIES 

router.get("/" , movieIndex); // routing the incoming request to controller from this file !

router.post("/" , movieCreate);

router.put('/:id' , movieUpdate);
router.delete('/:id', movieDelete);

export default router;
