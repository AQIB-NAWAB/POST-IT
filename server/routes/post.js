const express=require("express")
const mongoose=require("mongoose")
const router=express.Router()
const PostModel=require("../model/post")
const UserModel=require("../model/user")
router.post("/add/:id",async(req,res)=>{
    try{
        const id=req.params.id
        const {title,description}=req.body
        const user=await UserModel.findById({_id:id})   
        const post=new PostModel({user,title,description})
        await post.save()
        res.json(post)
    }catch(error){
        res.json(error)
    }
})

router.get("/show/:id",async(req,res)=>{
    try{
const user=req.params.id
        const posts=await PostModel.find({user})

        res.json(posts)
    }catch(error){
        res.json(error)
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try{
        
        await PostModel.findByIdAndDelete({_id:req.params.id})
        res.json("User deleted")
            
    }catch(error){
        res.json(error)
    }
})

module.exports=router