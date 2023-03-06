import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import "./App.css";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage";
import ProjectsPage from "./components/ProjectsPage";
import ProjectList from "./components/projectList";

function App() {

const [projects, setProjects] =useState([])
const [users, setUsers] =useState([])

// useEffect (()=>{
//   fetch("http://localhost:9292/projects")
//   .then(Response=>Response.json())
//   .then(data=>setProjects(data))


  // fetch("http://localhost:9292/users")
  // .then(Response=>Response.json())
  // .then(data=>setUsers(data))
// },[])
//  const projectArray=projects.map((project)=>{
//   return <h2>{project.title}</h2>
//  })

//  const usersArray=users.map((users)=>{
//   return <h2>{users.email}</h2>
//  })



  return (
//     <div className="App">
//       <h1>projects</h1>
// {projectArray}

// <h3>users</h3>
// {usersArray}
//     </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projectlist" element={<ProjectList />} />
      </Routes>
    </Router>
  );
}

export default App;
