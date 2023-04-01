const express=require("express")
const jwt=require("jsonwebtoken")

const protect=async(req,res,next)=>{
    try{
        let token=req.header.authorization.split(" ")[1]
const decoded=await jwt.verify(token,"aqib")



 req.user_id=decoded

next()
    }catch(error){
        res.json(error)
    }
}
module.exports=protect