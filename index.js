
const express = require('express');
 
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


const app = express();


app.get("/", (req,res)=> {
    res.json({
        message: "Welcome to the API",
        version: "1.0.0"
    });
})

app.post("/", async (req,res)=>{
    const user = {
        name:"padam",
        email:"padam@gmail.com",
        address:"123 Main Street"
    }
    const saveData  = await prisma.user.create({
        data:{
            name:user.name ,
            email:user.email,
            addresses: user.address,
        }
    })
    res.json({
        message: "Data saved successfully",
        data:saveData
    });


})




const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})





