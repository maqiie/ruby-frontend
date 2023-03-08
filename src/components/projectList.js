import React, { useState, useEffect } from "react";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:9292/projects"),
      fetch("http://localhost:9292/users"),
    ])
      .then(([projectsResponse, usersResponse]) =>
        Promise.all([projectsResponse.json(), usersResponse.json()])
      )
      .then(([projectsData, usersData]) => {
        setProjects(projectsData);
        setUsers(usersData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCompleteProject = (id, completed) => {
    fetch(`http://localhost:9292/project/update/status/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: completed })
    })
    .then(response => {
      if (response.ok) {
        // update projects in state
        const updatedProjects = projects.map(project => {
          if (project.id === id) {
            return { ...project, completed: completed }
          }
          return project
        })
        setProjects(updatedProjects)
      } else {
        throw new Error('Failed to update project status')
      }
    })
    .catch(error => {
      console.error(error)
      alert('An error occurred while updating project status')
    })
  }
  

  const handleDeleteProject = (id) => {
    fetch(`http://localhost:9292/destroy/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedProjects = projects.filter((project) => project.id !== id);
        setProjects(updatedProjects);
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
      });
  };

  const [selectedUserId, setSelectedUserId] = useState("");

  const handleAddUserToProject = (projectId, userId) => {
    fetch(`http://localhost:9292/project/${projectId}/user?user_id=${userId}`, {
      method: "POST"
    })
      .then((response) => response.json())
      .then((updatedProject) => {
        fetch(`http://localhost:9292/project/${projectId}`)
          .then((response) => response.json())
          .then((projectData) => {
            const updatedProjects = projects.map((project) => {
              if (project.id === updatedProject.id) {
                return projectData;
              }
              return project;
            });
            setProjects(updatedProjects);
            setSelectedUserId(""); // reset selected user ID
          })
          .catch((error) => {
            console.error("Error fetching project data:", error);
          });
      })
      .catch((error) => {
        console.error("Error adding user to project:", error);
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
    onChange={(event) =>
      handleCompleteProject(project.id, event.target.checked)
    }
    className="mr-2"
  />
  <label
    htmlFor={`project-${project.id}-completed`}
    className={`${project.completed ? "line-through text-gray-500" : ""}`}
  >
    {project.completed ? "Completed" : "Incomplete"}
  </label>
  {project.completed && (
    <div className="text-green-500 ml-2">Completed</div>
  )}
</div>

            <div className="mt-4">
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
              >
                Delete
              </button>
              <select
  value={""}
  onChange={(event) =>
    handleAddUserToProject(project.id, event.target.value)
  }
  className="border border-gray-400 rounded-md p-2"
>
  <option disabled value="">
    Add user to project
  </option>
  {users.map((user) => (
    <option key={user.id} value={user.id} style={{ color: 'black' }}>
      {user.name}
    </option>
  ))}
</select>




            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
