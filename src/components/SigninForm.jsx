import React, { useState } from 'react';
import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import axios from 'axios';
import { ScreenMode } from '../pages/SigninPage';

const SigninForm = ({ onSwitchMode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post('https://hvac-system.azurewebsites.net/user/login', { username, password }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      alert('Logged in successfully!');
      window.location.reload();
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        color: colors.grey[800]
      }}
    >
      <Stack spacing={5} sx={{
        width: "100%",
        maxWidth: "500px"
      }}>
        <Stack>
          <Typography variant='h4' fontWeight={600} color={colors.grey[800]}>
            Welcome back!!
          </Typography>
          <Typography color={colors.grey[600]}>
            Sign in to continue
          </Typography>
        </Stack>

        <Stack spacing={4}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Username</Typography>
              <TextField value={username} onChange={handleUsernameChange} />
            </Stack>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Password</Typography>
              <TextField type='password' value={password} onChange={handlePasswordChange} />
            </Stack>
          </Stack>
          <Button
            variant='contained'
            size='large'
            sx={{
              bgcolor: colors.grey[800],
              "&:hover": {
                bgcolor: colors.grey[600]
              }
            }}
            onClick={handleSignin}
          >
            Sign in
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography>Don't have an account?</Typography>
          <Typography
            onClick={() => onSwitchMode(ScreenMode.SIGN_UP)}
            fontWeight={600}
            sx={{
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            Sign up now
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SigninForm;
