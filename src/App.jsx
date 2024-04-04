// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import SigninPage from './pages/SigninPage';
import Dashboard from './components/DashboardComponent/Dashboard'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

          const response = await axios.get('https://hvac-system.azurewebsites.net/user/me');

          if (response.status === 200) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching user authentication status:', error);
        setIsLoggedIn(false); 
      }
    };

    checkAuthStatus();
  }, []); 
  return (
    <>
      <CssBaseline />
      {isLoggedIn ? <Dashboard/> : <SigninPage />}
    </>
  );
}

export default App;
