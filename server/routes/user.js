const express=require("express")
const protect=require("../controller/auth")
const router=express.Router()

const {addUser,getUsers,getUser,removeUser,updateUser,loginUser,protected,getUserFromToken } =require("../controller/user")
//sign up routes
router.post("/signup",addUser)
router.delete("/delete/:id",removeUser)
router.get("/users",getUsers)
router.get("/user/:id",getUser)
router.post("/update/:id",updateUser)
// login Routes

router.post("/login",loginUser)

router.get("/protected",protect,protected)
/// get the user from the token

router.get("/token-user/:id",getUserFromToken)
module.exports=router