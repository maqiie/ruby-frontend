
import React, { useState, useEffect } from 'react';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const handleCompleteProject = (id, completed) => {
    fetch(`http://localhost:9292/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: completed })
    })
      .then((response) => response.json())
      .then((updatedProject) => {
        const newProjects = projects.map((project) => {
          if (project.id === updatedProject.id) {
            return updatedProject;
          }
          return project;
        });
        setProjects(newProjects);
      });
  };

  const handleDeleteProject = (id) => {
    fetch(`http://localhost:9292/destroy/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedProjects = projects.filter((project) => project.id !== id);
        setProjects(updatedProjects);
      })
      .catch((error) => {
        console.error('Error deleting project:', error);
      });
  };

  const handleAddUserToProject = (projectId, userId) => {
    fetch(`http://localhost:9292/projects/${projectId}/add_user/${userId}`, {
      method: 'POST'
    })
      .then((response) => response.json())
      .then((updatedProject) => {
        const newProjects = projects.map((project) => {
          if (project.id === updatedProject.id) {
            return updatedProject;
          }
          return project;
        });
        setProjects(newProjects);
      })
      .catch((error) => {
        console.error('Error adding user to project:', error);
      });
  };
  
  return (
   
      <div className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">All Projects</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={project.completed} 
                  onChange={(event) => handleCompleteProject(project.id, event.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="completed" className="text-gray-700 font-bold">
                  {project.completed ? "Completed" : "Not Completed"}
                </label>
              </div>
              <div className="flex items-center mt-2">
                <label htmlFor="user-select" className="text-gray-700 font-bold mr-2">
                  Add user to project:
                </label>
                <select id="user-select" onChange={(event) => handleAddUserToProject(project.id, event.target.value)} className="border border-gray-400 rounded-md px-2 py-1">
                  <option value="">-- select a user --</option>
                  <option value="1">User 1</option>
                  <option value="2">User 2</option>
                  <option value="3">User 3</option>
                </select>
              </div>
              <button 
                onClick={() => handleDeleteProject(project.id)} 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-4">
                Delete Project
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
    
}

export default ProjectList;