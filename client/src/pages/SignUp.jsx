import {React,useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
const SignUp = () => {
  const navigate=useNavigate()
const [data,setData]=useState({
  username:"",
  email:"",
  password:""
})

const handelChange=(e)=>{


  setData(preVal=>{
    return{
      ...preVal,
      [e.target.name]:e.target.value
    }
  })
}

const handelSubmit=(e)=>{
  
    e.preventDefault()

  const {username,email,password}=data;
   axios.post("http://localhost:5000/user/signup",data)
  .then((res)=>{
    
    console.log(res.data)
    navigate("/login")
  })
  .catch((err)=>console.log(err))
  

}
  return (
    <div className='box'>
      <form onSubmit={handelSubmit}> 
        <h1>
          Sign UP 
        </h1>
        <p>create account  to become the part of team.</p>
        <input type="text" autoComplete='off' placeholder='Enter your name'  onChange={handelChange} name="username" value={data.username}/>
        <input type="email" placeholder='Enter your email'  onChange={handelChange} name="email"  value={data.email}/>
        <input type="password" placeholder='Enter your pssword' onChange={handelChange} name="password"  value={data.password}/>
        <button className="button">Sign up</button>
        <br/><br/>
        <p>Already have Account <Link to="/login">Login</Link>
 </p>
           </form>



    </div>
  )
}

export default SignUp