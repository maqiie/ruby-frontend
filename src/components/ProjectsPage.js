// import React, { useState } from "react";

// function ProjectsPage() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [completed, setCompleted] = useState(false);
//   const [projects, setProjects] = useState([]);

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleCompletedChange = (event) => {
//     setCompleted(event.target.checked);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const project = {
//       title: title,
//       description: description,
//       completed: completed,
//     };

//     // Add the project to the list of projects
//     setProjects([...projects, project]);

//     // Reset the form
//     setTitle("");
//     setDescription("");
//     setCompleted(false);
//   };

//   const handleDelete = (index) => {
//     // Remove the project from the list of projects
//     const newProjects = [...projects];
//     newProjects.splice(index, 1);
//     setProjects(newProjects);
//   };

//   return (
//     <div className="bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white rounded-lg shadow-md p-4"
//       >
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
//             Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={handleTitleChange}
//             className="border border-gray-400 p-2 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="description"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Description
//           </label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={handleDescriptionChange}
//             className="border border-gray-400 p-2 rounded w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="checkbox"
//             id="completed"
//             checked={completed}
//             onChange={handleCompletedChange}
//             className="mr-2"
//           />
//           <label htmlFor="completed" className="text-gray-700 font-bold">
//             Completed
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
//         >
//           Create Project
//         </button>
//       </form>

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
//                 Completed
//               </label>
//             </div>
//             <button
//               onClick={() => handleDelete(index)}
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
// export default ProjectsPage;
import React, { useState } from "react";

function ProjectsPage({ onCreateProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [projects, setProjects] = useState([]);

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

    const project = {
      title: title,
      description: description,
      completed: completed,
    };
    

    // Add the project to the list of projects
    setProjects([...projects, project]);

    // Call the onCreateProject function with the new project
    onCreateProject(project);

    // Reset the form
    setTitle("");
    setDescription("");
    setCompleted(false);
  };

  const handleDelete = (index) => {
    // Remove the project from the list of projects
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
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
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
        >
          Create Project
        </button>
      </form>

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
                                Completed
                              </label>
                            </div>
                            <button
                              onClick={() => handleDelete(index)}
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
                export default ProjectsPage;
