import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Toaster } from 'react-hot-toast';
import Signup from './components/SignUp/Signup.jsx'
import Dashbord from './components/Dashbord/Dashbord.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import App from './App.jsx'
import DatingTips from './components/Dashbord/DatingTips.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='signup' element={<Signup />} />
      <Route path='dashbord' element={
        <ProtectedRoute>
          <Dashbord />
        </ProtectedRoute>
      } />
      <Route path='datingTip' element={<DatingTips />} />
    </Route>
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
