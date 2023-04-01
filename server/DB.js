const mongoose=require("mongoose")

const URI=process.env.URI
mongoose.connect(URI).then(()=>
console.log("Database connected")
).catch((error)=>{
    console.log(error)
})