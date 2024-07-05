import React from 'react';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import ForgotPassword from './Pages/ForgetPassword';
import VerifyToken from './Pages/VerifyToken';
import ResetPassword from './Pages/ResetPassword';
import Header from './Compontes/Header';
import Footer from './Compontes/Footer';
import LandingPage from './Pages/LandingPages';

function App() {
  
  return (
    <div className='App'>
    <Router>
      <ToastContainer />
      <Header/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-token/:token" element={<VerifyToken />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/>
        </Router>
    </div>
  )
}

export default App