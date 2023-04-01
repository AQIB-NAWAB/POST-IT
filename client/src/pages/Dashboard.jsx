import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [postTest, setPostText] = useState({
    title: "",
    description: "",
  });
  const id = window.localStorage.getItem("userId");
  const getAllPost=async()=>{
    await axios
    .get(`http://localhost:5000/post/show/${id}`)
    .then((res) => {
      setPost(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    if (!id) {
      alert("Plaese Login before to access");
      navigate("/login");
    }


      axios
      .get(`http://localhost:5000/user/token-user/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log("dash err"));
     

    // get the post od user
    
getAllPost()
    
  },[post]);
  console.log(user);
  const handelChange = (e) => {
    setPostText({
      ...postTest,
      [e.target.name]: e.target.value,
    });
  };
  const addPost = async(e) => {
    e.preventDefault()
    try {
     

      axios
        .post(`http://localhost:5000/post/add/${id}`, {
          title: postTest.title,
          description: postTest.description,
        })
        .then((res) => setUser(res.data))
        .catch((err) => console.log("Post Errro"));


        // updateing the post
        setPost([...post,postTest])
        setPostText({
          title:"",
          description:""
        })

    } catch (error) {
      console.log(error);
    }
  };
  const deletePost=async(event)=>{
   try{
    axios
        .delete(`http://localhost:5000/post/delete/${event.target.id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log("delete Errro"));
    // removing the post

    const deleteFreePost= post.filter((single_post)=>{
      return event.target.id != single_post._id
    })
    setPost(deleteFreePost)

   }catch(error){
    console.log(error)
   } 
  }
  console.log(post);
  return (
    <div className="dashboard">
     <div className="info_container">
     <div className="info">
     <h2>HY {user.username}</h2>
      <p>Your Email is {user.email}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quam velit fuga impedit excepturi qui, deserunt harum pariatur quae iste!</p>
     </div>


     <div className="add_post">
        <h2>Add New Post</h2>
        <form onSubmit={addPost}>
          <input
            type="text"
            placeholder="Enter The Title"
            value={postTest.title}
            name="title"
            onChange={handelChange}
          />
          <input
            type="text"
            placeholder="Enter The Description"
            value={postTest.description}
            name="description"
            onChange={handelChange}
          />
          <button>Post</button>
        </form>
      </div>
     </div>
      
      <div className="show_post">
        {
          post.length<1?<h1>No Post ....</h1>:post.map((single_post)=>{
            return(
              <>
              <div className="box" key={single_post._id}>
                <h3>Title: {single_post.title}</h3>
                <p>Description: {single_post.description}</p>
                <button className="delete_post" onClick={deletePost}
                id={single_post._id}>
                  X
                </button>
              </div>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default Dashboard;
