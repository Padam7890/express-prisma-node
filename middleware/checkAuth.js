const jwt = require("jsonwebtoken");

async function checkAuth(req, res, next) {
  //token linu paryo kahabata header bata  req.headers.
  try {
    const getToken = req.headers.authorization;
    if (!getToken) {
      return res.status(404).json({
        message: "Token not found",
      });
    }
    const verifyToken = await jwt.verify(getToken, "padam");
    if (!verifyToken) {
      return res.status(401).json({
        message: "Token not valid",
      });
    }
    req.id = verifyToken;
    next();
  } catch (error) {
    return res.status(500).json({
      messgae: "Token not valid",
    });
  }
}

module.exports = checkAuth;
