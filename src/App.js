import React from 'react';
import { Route } from "react-router-dom";

import Nav from './components/intro_pages/Nav.js';
import Home from './components/intro_pages/Home.js';
import About from './components/intro_pages/About.js';
import Contact from './components/intro_pages/Contact.js';
import Login from './components/authentication/Login.js';
import SignUp from './components/authentication/SignUp.js';

function App() {
  return (
    <div>
      <Nav/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/login" component={Login}/>
      <Route path="/SignUp" component={SignUp}/>
    </div>
  );
}

export default App;
