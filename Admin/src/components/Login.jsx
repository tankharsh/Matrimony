import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'password123') {
      onLogin(); // Call onLogin to indicate successful login
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="bg-white rounded-lg shadow-lg flex overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ width: '700px', height: '400px' }}
      >
        {/* Left side: Image */}
        <div className="w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2014/09/07/16/53/couple-437968_1280.jpg"
            alt="Login visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side: Login form */}
        <div className="w-1/2 flex items-center justify-center p-8 bg-gray-100">
          <div className="w-full max-w-xs">
            <div className='flex justify-center items-center'>
                <img src={logo} className='h-10' alt="Matrimony" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition-all duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
