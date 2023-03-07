import React, { useState, useEffect } from "react";

function ProjectsPage({ user }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCompletedChange = (event) => {
    setCompleted(event.target.checked);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = { title, description, completed };
    console.log('Submitting project:', newProject); // added console.log statement
    fetch(`http://localhost:9292/project/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects([...projects, data]);
        setTitle("");
        setDescription("");
        setCompleted(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  

  const handleDelete = (index, id) => {
    fetch(`http://localhost:9292/destroy/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        const newProjects = [...projects];
        newProjects.splice(index, 1);
        setProjects(newProjects);
      } else {
        console.log("Error deleting project:", response.status);
      }
    });
  };
  

  const handleUpdate = (id, updates) => {
    fetch(`https://localhost:9292//project/update/status/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    })
      .then((response) => response.json())
      .then((data) => {
        const index = projects.findIndex((p) => p.id === data.id);
        const newProjects = [...projects];
        newProjects[index] = data;
        setProjects(newProjects);
      });
  };

  return (
    <div className="bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-4"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="border border-gray-400 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="border border-gray-400 p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="completed"
            checked={completed}
            onChange={handleCompletedChange}
            className="mr-2"
          />
          <label htmlFor="completed" className="text-gray-700 font-bold">
            Completed
          </label>
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded
          ">
          Create Project
          </button>
          </div>
          </form>
          <h1 className="text-xl font-bold mb-2">Projects</h1>
          {projects.map((project, index) => (
          <div
                 key={project.id}
                 className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
               >
          <div>
          <h2 className="font-bold">{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.completed ? "Completed" : "Not Completed"}</p>
          </div>
          <div>
          <button
          className="bg-yellow-500 text-white p-2 rounded mr-2"
          onClick={() => {
          handleUpdate(project.id, {
          completed: !project.completed,
          });
          }}
          >
          {project.completed ? "Mark as Not Completed" : "Mark as Completed"}
          </button>
          <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => handleDelete(index, project.id)}
          >
          Delete
          </button>
          </div>
          </div>
          ))}
          </div>
          );
          }
          
          export default ProjectsPage;
