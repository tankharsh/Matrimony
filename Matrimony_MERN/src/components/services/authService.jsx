import axios from 'axios';
import { useEffect } from 'react';
import React, { createContext, useContext, useState } from 'react';

const API_URL = 'http://localhost:3000/api/users';

// Login service to authenticate user and store token and user data
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data.token) {

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('loggedInUser', JSON.stringify(response.data.user));

    }
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Login failed';
  }
};

export const getProfileById = async (id, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Logout service to remove token and user data
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('loggedInUser');
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Check if the user is logged in by checking for the token
export const isLoggedIn = () => {
  return !!localStorage.getItem('token'); 
};

// Get the logged-in user details from localStorage
export const getLoggedInUser = () => {
  const user = localStorage.getItem('loggedInUser');
  return user ? JSON.parse(user) : null;
};



// Fetch users from API with authorization token
export const getUsers = async () => {
  const token = getToken();
  if (!token) throw new Error('No token found');

  try {
    const response = await axios.get(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch users';
  }
};

export const updateUser = async (id, formData) => {
  const token = getToken();
  if (!token) throw new Error('No token found');

  try {
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    const response = await axios.put(`http://localhost:3000/api/users/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to update user';
  }
};

export const handleLogin = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/login', credentials);
    const { token, user } = response.data;

    // Save to localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect or update UI
    console.log('User logged in:', user);
  } catch (err) {
    console.error('Login error:', err.response.data);
  }
};


