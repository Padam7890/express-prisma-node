const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function getUser(req, res) {
  res.send("hye i am a user");

  //database bata data haru get garne

  // example:prisma.user.findMany();

  // res.json({
  //   messgae:"data fetch"
  //   data: example.data
  // })
}

async function createUser(req, res) {
  ///get data from body
  const { name, addresses, password, email } = req.body;
  console.log(req.body);

  // Check if any of the required fields are missing (validation)
  if (!name || !addresses || !password || !email) {
    return res.status(400).json({
      message:
        "Please fill in all required fields: name, addresses, password, and email.",
    });
  }

  //check email if already exist or not (check if unique)

  const isExist = prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isExist) {
    return res.status(400).json({
      message: "Email already exist",
    });
  }

  //hash password
  const genSalt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, genSalt);

  //create user

  const createUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      addresses: addresses,
      password: hashpassword,
    },
  });

  const tokenGenerate = jwt.sign(
    {
      name: createUser.name,
      email: createUser.email,
    },
    "padam",
    {
      expiresIn: "1h",
    }
  );
  //

  return res.status(201).json({
    message: "User created successfully",
    user: createUser,
    token: tokenGenerate,
  });
}

function homepage(req, res) {
  res.send("Hey i am a homepage");
}


function login() {
  //req.body garera data line
  //validation haru garne 
  //email already xaki xaina 
  //password match hunu paryo
  //token generate karna paryo
  //  return.res.status(200).json({
  //   tokem:token
  //  })
  
}

console.log("hello");

module.exports = {
  getUser,
  createUser,
  homepage,
};

console.log("hey");
