const prisma = require("../config/prisma");
const  bcrypt = require('bcryptjs');

function getUser(req, res) {
  res.send("hye i am a user");


}

async function createUser(req, res) {

  ///get data from body
  const { name, addresses, password, email } = req.body;

  // Check if any of the required fields are missing (validation)
  if (!name || !addresses || !password || !email) {
    return res.status(400).json({
      message: "Please fill in all required fields: name, addresses, password, and email.",
    });
  }

  //check emil if already exist or not (check if unique)

  const isExist =  prisma.user.findUnique({
    where: {
      email
    }
  })

  if(!isExist){
    return res.status(400).json({
      message: "Email already exist",
    });
  }


  //hash password
  const genSalt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, genSalt)


  //create user 

  const createUser = await prisma.user.create({
    data:{
      name:name,
      email:email,
      addresses:addresses,
      password:hashpassword
    }
  })

  return res.json({
    message: "User created successfully",
    user: createUser,
  })
 }

function homepage(req, res) {
     res.send("Hey i am a homepage");
}

console.log('hey')



module.exports = {
    getUser,
    createUser,
    homepage

};