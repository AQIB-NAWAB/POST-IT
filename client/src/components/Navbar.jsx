import {React,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate=useNavigate()
  const user = window.localStorage.getItem("userId");
  // logout 
  const logout=()=>{
    window.localStorage.removeItem("userId")
    navigate("/login")

  } 
  // checking the user
  const checkUser=()=>{
    if (!user) {
      navigate("/");
     
    }

    
  }
  useEffect(()=>{
// is user already logged in    
    if(user){
     navigate("/dashboard")   
    }
  },[])
  
  return (
    <>
    <div className="navbar">
      <Link to="/dashboard"
      onClick={checkUser}>Dashboard </Link>
      {user?(
<>
        <button onClick={logout}>Logout</button>
</>
        )
           :(<>
        <Link to="/">SignUp </Link>
        <Link to="/login">Login </Link>
        </>
    )
}
    </div>
    </>
  );
};

export default Navbar;
