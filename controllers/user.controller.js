function getUser(req, res) {
  res.send("hye i am a user");


}

function createUser(req, res) {

  const { name, addresses, password, email } = req.body;

  // Check if any of the required fields are missing
  if (!name || !addresses || !password || !email) {
    return res.status(400).json({
      message: "Please fill in all required fields: name, addresses, password, and email.",
    });
  }

  /// Assignment: pisma le user table ma gayera email chai xaki xaina khojna parne
  
  example : Prisma.user.findmany({
    where:{
      email:email
    }
  })

  












  


}

function homepage(req, res) {
     res.send("Hey i am a homepage");
}




module.exports = {
    getUser,
    createUser,
    homepage

};