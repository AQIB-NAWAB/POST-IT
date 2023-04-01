import React from "react";
import { Link,useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate=useNavigate()
  const user = window.localStorage.getItem("userId");
  const logout=()=>{
    window.localStorage.removeItem("userId")
    navigate("/login")

  }
  return (
    <>
    <div className="navbar">

      <Link to="/dashboard">Dashboard </Link>
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
