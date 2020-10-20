import './App.css';
import Post from './component/Post/Post';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import PostDetail from './component/PostDetail/PostDetail';

function App() {
  
  return (
    <div>
      <h3>All Post</h3>
      <Post></Post>
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path= "/post">
            <PostDetail></PostDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
