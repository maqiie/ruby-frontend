// import React, { useState } from "react";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle login logic here
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
//       <h2 className="text-2xl font-semibold mb-4">Login</h2>
//       <div className="mb-4">
//         <label htmlFor="username" className="block mb-2 font-medium">
//           Username:
//         </label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block mb-2 font-medium">
//           Password:
//         </label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full px-4 py-2 text-white font-medium bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Submit the form data to the server
    const response = await fetch('http://localhost:9292/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    // Handle the response from the server
    if (response.ok) {
      // Login was successful, so redirect to home page or do something else
    } else {
      // Login failed, so display an error message
      const data = await response.json();
      setErrorMessage(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2 font-medium">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 font-medium">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
