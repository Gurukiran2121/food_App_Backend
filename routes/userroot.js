const express = require("express")
const router = new express.Router()
const User = require("../models/user")
const becrypt = require('bcrypt')


router.post('/rigister', async (req, resp) => {
    const {name , email , password} = req.body
  try {
      const finduser = await User.findOne({ email: req.body.email })
      if (finduser) {
         return resp.status(422).json({error : "user already exixts"})
      }
      const hash = await becrypt.hashSync(password , 10)
      const cresteuser = new User({name : name , email : email , password : hash})
      const result = await cresteuser.save()
      if (result) {
          resp.status(201).json({message : "signin succesful"})
      }
      else {
          resp.status(422).json({error : "error occured while rigistring the user"})
      }
  } catch (error) {
    resp.status(422).json({error : "error occured while rigistring the user "})
  }
       
})


router.post('/login', async (req, resp) => {
const {email , password} = req.body
try {
  const checkuser = await User.findOne({ email: email })
  if (!checkuser) {
    return resp.status(422).json({error : "no account linked to this email adress"})
  }
  
  const auth = await becrypt.compare(password, checkuser.password)
  if (auth) {
    resp.status(201).json({message : "succesfully logged in"})
  }
  else {
    resp.status(422).json({error : "incorrect credentials"})
  }
} catch (error) {
  resp.status(422).json({error : "error occured while logging in"})
}
})


module.exports = router


