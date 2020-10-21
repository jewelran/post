import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';

function App() {
  
  return (
    <div>
      <h3>All Post</h3>
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
