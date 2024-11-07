function getUser(req, res) {
  res.send("hye i am a user");


}

function createUser(req, res) {

}

function homepage(req, res) {
     res.send("Hey i am a homepage");
}




module.exports = {
    getUser,
    createUser,
    homepage

};