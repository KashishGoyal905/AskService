const express = require("express");

const router = express.Router();
const User = require("../models/client/clientschema");

//routes

router.get("/home", (req, res, next) => {
  res.send("welcome");
});

router.post("/login", (req, res) => {
  res.send("welcome login");
});
router.post("/register", (req, res) => {
  console.log("register");

  const user = new User({
    userName:req.body.userName,
    email:req.body.email,
    password:req.body.password,
  });
  console.log(user);

  res.send(user);

  
});

module.exports = router;
