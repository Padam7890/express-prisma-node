
const express = require('express');

const app = express();


app.get("/", (req,res)=> {
    res.json({
        message: "Welcome to the API",
        version: "1.0.0"
    });
})



const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})





