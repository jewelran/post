import { Link } from "react-router-dom";
import React from 'react';
import './Post.css'

const Post = (props) => {
    const {id , title,img ,body} = props.post
    return (
        <div className = "psotContainer">
            <img src={img} alt=""/>
            <h1>id:{id}</h1>
            <h3>title:{title}</h3>
            <p>comment:{body}</p>
            <Link to = "/Home">  <button style = {{color:"white", padding: "8px 20px", outline: "none", borderRadius:"8px",background:"orange"}} variant="contained" color="secondary">
            Home
          </button></Link>
          
        </div>
    );
};

export default Post;