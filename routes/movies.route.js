import express from "express";
const router = express.Router();


//CRUD FOR MOVIES 

router.get("/" , (req , res) => {
   res.send("sucess 200 !");
})

router.post("/" , (req , res) => {
    res.send("Sucess for create using post !");
})

router.put('/movies/:id' , () => {

})

router.delete('/movies/:id' , () => {

})

export default router;
