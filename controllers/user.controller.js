const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// const body = {
//   "name":"padam"
// }



async function getUser(req, res) {
  const getUser = await prisma.user.findMany();
  return res.status(200).json({
    message:"User Found",
    data: getUser

  })

}

async function createUser(req, res) {
  ///get data from bo
  const { name, addresses, password, email } = req.body;
  console.log(req);

  // Check if any of the required fields are missing (validation)
  if (!name || !addresses || !password || !email) {
    return res.status(400).json({
      message:
        "Please fill in all required fields: name, addresses, password, and email.",
    });
  }

  //check email if already exist or not (check if unique)

  const isExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isExist) {
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

async function login() {
 
  const {email,password} = req.body;
  const checkEmail = await prisma.user.findUnique({
    where:{
      email,
    }
  })
  if(!checkEmail){
    return res.status(401).json({
      message: "Email not found",
    })
  }

  const isPassword = bcrypt.compare(password, checkEmail.password);
  if(!isPassword){
    return res.status(401).json({
      message: "Password not match",
    })
  }
  const tokenGenerate = jwt.sign(
    {
      name: createUser.name,
      email: createUser.email,
    },
    "padam",
    {
      expiresIn: "1h",
    }
)

return res.status(200).json({
  message:"Use Logged In Succesfully",
  token:tokenGenerate
})

}

console.log("hello");

module.exports = {
  login,
  getUser,
  createUser,
  homepage,
};

console.log("hey");
