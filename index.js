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

app.post("/", async (req, res) => {
 const {name,email, addresses} = req.body;  

  const saveData = await prisma.user.create({
    data: {
      name,
      email,
      addresses,
    },
  });

  res.json({
    message: "Data saved successfully",
    data: saveData,
  });

  
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
