const express = require("express");
const router = express.Router();

const { PrismaClient,Prisma } = require("@prisma/client");
const { PrismaClientValidationError, PrismaClientUnknownRequestError } = require("@prisma/client/runtime/library");

const prisma = new PrismaClient();

prisma
  .$connect()
  .then((result) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
    process.exit(1);
  });

const app = express();

app.use(express.json());








app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/padam", function (req, res) {
  res.send("Hello Padam!");
});

app.get("/", async (req, res) => {
  //provider(prisma, tablename(user), method()
  const getUser = await prisma.user.findMany();
  return res.status(200).json({
    message: "user successfully fetched",
    data: getUser,
  });
});




app.post("/user", async (req, res) => {
  const { name, email, addresses } = req.body;
  console.log(req.body);
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

app.put("/user/:id", async (req, res) => {
  const { id } = req.params; //kunchaima update garne
  const { name, email, addresses } = req.body; //k vau update garne

  //updateb database

  const updateDb = await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: name,
      email: email,
      addresses: addresses,
    },
  });
  return res.status(200).json({
    data: updateDb,
    message: "user updated successfully",
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
