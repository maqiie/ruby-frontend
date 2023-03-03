import React from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import HomePage from './views/HomePage';
import './App.css';
import LoginPage from './components/LoginPage.js';
import SignupPage from './components/SignupPage';
import ProjectsPage from './components/ProjectsPage';





function App() {
  return (
    <Router>
       
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/projects" component={ProjectsPage} /> 
      
  
  </Router>
 
   
  );
}

export default App;
