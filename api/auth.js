const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const router = express.Router();
const Profile = require("../model/Profile");

router.post("/", async (req, res) => {
  try {
    console.log("authheeeeeeeeeeeeeeeehhhh");
    let { username, password } = req.body;

    let profile = await Profile.findOne({ username });

    if (!profile) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, profile.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payLoad = {
      profile: {
        id: profile.id
      }
    };

    jwt.sign(
      payLoad,
      config.get("secreat"),
      {
        expiresIn: 3600000
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error.......");
  }
});

module.exports = router;
