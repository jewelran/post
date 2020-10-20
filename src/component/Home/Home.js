import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [users, setUsers] = useState([]) 


    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[]);
  

  console.log(users)
    return (
        <div>
            <h3>total:{users.length}</h3>
            {
                users.map(users => <Post user ={users}>
                   
                </Post>)
            }
          
         
        </div>
    );
};

export default Home;