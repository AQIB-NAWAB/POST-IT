const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true},
    title:{type:String,required:true},
    description:{type:String,required:true}
})
const PostModel= mongoose.model("posts",postSchema)

module.exports=PostModel