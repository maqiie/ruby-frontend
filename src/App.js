import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import HomePage from './views/HomePage';
import './App.css';
import LoginPage from './components/LoginPage.js';
import SignupPage from './components/SignupPage';
import ProjectsPage from './components/ProjectsPage';





function App() {
  return (
    <Router>
       <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
        
      
  
  </Router>
 
   
  );
}

export default App;
