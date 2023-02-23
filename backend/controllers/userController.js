const User = require('../models/userModel')

// login user

const loginUser = async (req, res) => {
  res.json({message: "user login"})
}


//signup user

const signupUser = async (req, res) => {
    res.json({message: "user signup"})
}

module.exports = { signupUser, loginUser }
