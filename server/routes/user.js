const express=require("express")

const router=express.Router()

const {addUser,getUser,loginUser,getUserFromToken } =require("../controller/user")
//sign up routes
router.post("/signup",addUser)

router.get("/user/:id",getUser)

// login Routes

router.post("/login",loginUser)


/// get the user from the token
router.get("/token-user/:id",getUserFromToken)
module.exports=router