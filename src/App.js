
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import "./App.css";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage";
import ProjectsPage from "./components/ProjectsPage";
import ProjectList from "./components/projectList";
import LandingPage from "./components/LandingPage";
import Users from "./components/users";
function App() {

// const [projects, setProjects] =useState([])
// const [users, setUsers] =useState([])





  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projectlist" element={<ProjectList />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/users" element={<Users />} />

      </Routes>
    </Router>
    );
  
}

export default App;
