const express=require("express")
require("dotenv").config()
require("./DB")
const cors=require("cors")

const userRoutes=require("./routes/user")
const postRoutes=require("./routes/post")

const app=express()
app.use(cors())
app.use(express.json())
app.use("/post",postRoutes)
app.use("/user",userRoutes)


// getting port from env file
var port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is Listening on ${port}`)
})