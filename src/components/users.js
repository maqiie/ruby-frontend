import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:9292/users/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
      });
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <ul className="mt-4">
        {users.map((user, index) => (
          <li key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="text-lg font-bold mb-2">{user.name}</h3>
            <p className="text-gray-700 mb-2">{user.email}</p>
            <p className="text-gray-700 mb-2">ID: {user.id}</p>
            <button 
              onClick={() => handleDeleteUser(user.id)} 
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

export default Users;

