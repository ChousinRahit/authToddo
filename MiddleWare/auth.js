const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");
  console.log("llllllllllllllllll");

  if (!token) {
    return res.status(401).json({ msg: "No token, authentication denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("secreat"));

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
