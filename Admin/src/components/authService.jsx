import axios from 'axios';

const API_URL =  'http://localhost:3000/api/admin/';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token); // Store the token
    }
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Logout service to remove token
export const logout = () => {
  localStorage.removeItem('token'); 
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('token'); // Returns true if the token exists, otherwise false
};


export const getUsers = async () => {
  const token = getToken();
  if (!token) throw new Error('No token found');

  try {
    const response = await axios.get(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in the Authorization header
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
