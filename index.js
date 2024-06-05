const express = require('express');
const app = express();


//get message
app.get("/msg", (req, res, next) => {
    res.json({"message": "Hello World!"});
   });


app.listen(3001, () => {
    console.log("Server running on port 3000");
   });