import {React,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({
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
    const {email,password}=data;
     axios.post("http://localhost:5000/user/login",{email,password})
    .then((res)=>{
      console.log("log in")
      window.localStorage.setItem("userId",res.data._id)
      navigate("/dashboard")
    })
    .catch((err)=>console.log(err))


  
  }
  return (
    <div className='box'>
    <form onSubmit={handelSubmit}> 
      <h1>
        Login In 
      </h1>
      <p>Login your Account </p>
      <input type="email" placeholder='Enter your email'  onChange={handelChange} name="email"  value={data.email}/>
      <input type="password" placeholder='Enter your pssword' onChange={handelChange} name="password"  value={data.password}/>
      <button className="button">Login</button>
      <br/><br/>
        <p> Don't have Account <Link to="/">Sign Up</Link>
 </p>
 <p>
  <Link>Forget  Password</Link>
  </p>
    </form>



  </div>
  )
}

export default Login