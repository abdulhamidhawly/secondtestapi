const express = require('express');
const app = express();


//get message
app.get("/msg", (req, res, next) => {
    res.json({"message": "khaled baarini available"});
   });


app.listen(3000, () => {
    console.log("Server running on port 3000");
   });