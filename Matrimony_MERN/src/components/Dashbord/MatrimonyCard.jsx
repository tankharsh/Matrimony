import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/authService';


const MatrimonyCard = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-2">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Explore Matrimony Profiles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <div className="w-40 h-40 rounded-lg overflow-hidden shadow-md">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mt-4">{user.name}</h3>
              <p className="text-gray-600">Age: {user.age}</p>
              <p className="text-gray-600">{user.profession}</p>
              <p className="text-gray-600">{user.city}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MatrimonyCard;
