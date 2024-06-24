export const movieIndex = (req , res) => {
    res.send("get all the movies !");
}

export const movieCreate = (req , res) => {
    res.send("Posting a new field in the data !");
}

export const movieUpdate = (req , res) => {
    res.send("Movie has been updated ");
}

export const movieDelete = (req , res) => {
    res.send("Movie has been deleted ");
}
