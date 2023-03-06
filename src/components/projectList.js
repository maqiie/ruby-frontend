// import React, { useState } from 'react';
// import ProjectsPage from './ProjectsPage';

// function ProjectList() {
//   const [projects, setProjects] = useState([]);

//   const handleCreateProject = (project) => {
//     setProjects([...projects, project]);
//   };

//   const handleDeleteProject = (index) => {
//     const newProjects = [...projects];
//     newProjects.splice(index, 1);
//     setProjects(newProjects);
//   };

//   return (
//     <div className="bg-gray-100 p-4">
//       <h2 className="text-xl font-bold mb-4">All Projects</h2>
//       <ProjectsPage onCreateProject={handleCreateProject} />
//       <ul className="mt-4">
//         {projects.map((project, index) => (
//           <li key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
//             <h3 className="text-lg font-bold mb-2">{project.title}</h3>
//             <p className="text-gray-700 mb-2">{project.description}</p>
//             <div className="flex items-center">
//               <input 
//                 type="checkbox" 
//                 checked={project.completed} 
//                 disabled 
//                 className="mr-2"
//               />
//               <label htmlFor="completed" className="text-gray-700 font-bold">
//                 {project.completed ? "Completed" : "Not Completed"}
//               </label>
//             </div>
//             <button 
//               onClick={() => handleDeleteProject(index)} 
//               className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 mt-2"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProjectList;
import React, { useState, useEffect } from 'react';
import ProjectsPage from './ProjectsPage';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const handleCreateProject = (project) => {
    setProjects([...projects, project]);
  };

  const handleDeleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">All Projects</h2>
      <ProjectsPage onCreateProject={handleCreateProject} />
      <ul className="mt-4">
        {projects.map((project, index) => (
          <li key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                checked={project.completed} 
                disabled 
                className="mr-2"
              />
              <label htmlFor="completed" className="text-gray-700 font-bold">
                {project.completed ? "Completed" : "Not Completed"}
              </label>
            </div>
            <button 
              onClick={() => handleDeleteProject(index)} 
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
