const express = require("express");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const app = express();

app.use(express.json());


app.get("/", async (req, res) => {
  //provider(prisma, tablename(user), method()
  const getUser = await prisma.user.findMany();
  return res.status(200).json({
    message: "user successfully fetched",
    data: getUser,
  });
});

app.post("/user", async (req, res) => {
 const {name,email, addresses} = req.body;  
 console.log(req.body)
  const saveData = await prisma.user.create({
    data: {
      name,
      email,
      addresses,
    },
  });

  res.status(200).json({
    message: "Data saved successfully",
    data: saveData,
  });
});

app.put("/user/:id", async (req, res)=> {
  const {id}  = req.params; //kunchaima update garne 
  const {name,email, addresses} = req.body;    //k vau update garne

  //updateb database 

  const updateDb = await prisma.user.update({
    where: {
      id:parseInt(id)
    },
    data:{
      name:name,
      email:email,
      addresses:addresses
    }
  })
  return res.status(200).json({
    data:updateDb,
    message:"user updated successfully",
  })


})


const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
