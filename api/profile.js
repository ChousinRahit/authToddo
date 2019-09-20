const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const Profile = require("../model/Profile");

//////////////////////new PROFILE
router.post("/", async (req, res) => {
  console.log("fffffffffff");

  const { username, password } = req.body;
  try {
    let profile = await Profile.findOne({ username });

    console.log(profile);

    if (profile) {
      return res.status(400).json({ msg: "Username already exists" });
    }
    profile = new Profile({
      username,
      password
    });

    const salt = await bcrypt.genSalt(10);

    console.log(salt);

    profile.password = await bcrypt.hash(password, salt);

    await profile.save();

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

    return res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
