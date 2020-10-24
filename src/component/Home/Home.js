import React, { useEffect, useState } from 'react';
import AllPost from '../AllPost/AllPost';
import data from '../Data/data.json'
const Home = () => {
    const [users, setUsers] = useState([]) 

    useEffect( () => {
        // fetch('https://jsonplaceholder.typicode.com/posts/')
        // .then(res => res.json())
        // .then(data => setUsers(data));
        setUsers(data)
        
    },[]);
    const [post, setPost] = useState([])
    const datailHandle = () => {
        console.log(post)
    }
    // const [photo,setPhoto] = useState([])

//   useEffect(() => {
//     const url = 'https://randomuser.me/api/?page=3&results=100&seed=abc'
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>setPhoto(data.results))
//   } ,[])

//   console.log(photo)
    return (
        <div>
            <h2 style={{color:"orange", textAlign:"center", fontSize:"30px"}}>All Post</h2>
            <h3  style={{color:"orange", textAlign:"center", fontSize:"20px"}}>total:{users.length}</h3>
            {
                users.map(user => <AllPost users = {user}  datailHandle = {datailHandle}></AllPost>)
            }
        {/* <h3>photo:{photo.length}</h3> */}
 
            {/* {
                photo.map( photo => <PostDetail photos = {photo}></PostDetail>)

            } */}
        

        
        </div>
    );
};

export default Home;