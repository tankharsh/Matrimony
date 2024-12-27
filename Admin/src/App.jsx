import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Login from './components/Login';
import Users from './components/Users';
import Adduser from './components/Adduser';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Update login status on successful login
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login status on logout
  };

  return (
    <Router>
      {!isLoggedIn ? ( 
        <Login onLogin={handleLogin} /> 
      ) : (
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar handleLogout={handleLogout} /> 
            <div className="overflow-y-auto p-4 flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="contact" element={<Contact />} />
                <Route path='users' element={<Users/>} />
                <Route path='adduser' element={<Adduser/>} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
