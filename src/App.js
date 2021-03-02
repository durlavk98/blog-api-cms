import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import PostList from './components/postList';
import EditPost from './components/editPost';
import CreatePost from './components/createPost';
import SignUp from './components/signup';
import LogIn from './components/login';
import ShowPost from './components/showPost';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route exact path='/posts' component={PostList}/>
        <Route exact path='/posts/create' component={CreatePost}/>
        <Route exact path='/posts/:id' component={ShowPost}/>
        <Route exact path='/edit/:id' component={EditPost}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/' component={LogIn}/>
      </div>
    </Router>
  );
}

export default App;