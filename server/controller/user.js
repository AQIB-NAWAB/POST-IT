const User=require("../model/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")





const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body

        const user=await User.findOne({email:email})

        if(!user){
            return res.status(401).json("User does not exist ")
        }


        if(!(await  bcrypt.compare(password,user.password))){
            return res.status(401).json("invalid password or username")
        }

        if(user  && (await bcrypt.compare(password,user.password))){
           return  res.status(200).json({
                username:user.username,
                email,
                password:user.password,
                _id:user._id,
                token:await jwt.sign({id:user._id},"aqib",{expiresIn:"10d"})
            })
        }

    }catch(error){
        res.send(error)
    }
}


// Register the user
const addUser=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const user_exist=await User.findOne({email})
        if(user_exist){
             return res.send({msg:"User already exist"})
        }
        const hashPassword=await bcrypt.hash(password,10)
        const created_user=new User({username,email,password:hashPassword})

        const new_user=await created_user.save()
        res.json(new_user)

    }catch(error){
        res.send(error)
    }
}




//show the speific user

const getUser=async(req,res)=>{
    try{
        const id=req.params.id
        const user=await  User.findById({_id:id})
        
        res.json(user)

    }catch(error){
        res.send(error)
    }
}
// delete the user












//protected




// get the user through token
const getUserFromToken=async(req,res)=>{
    try {
        const userId = req.params.id; // get the user ID from the URL parameter
        const user = await User.findById(userId); // retrieve the user from the database based on the ID
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        return res.json(user);
      } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Server error' });
      }
    };


module.exports={addUser,getUser,loginUser,getUserFromToken}