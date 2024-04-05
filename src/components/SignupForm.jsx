import React from 'react';
import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import { ScreenMode } from '../pages/SigninPage';
import axios from 'axios';

const SignupForm = ({ onSwitchMode }) => {
  const [formData, setFormData] = React.useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hvac-system.azurewebsites.net/user/signup', {
        username: formData.username,
        password: formData.password,
        email: formData.email,
        fname: formData.fname,
        lname: formData.lname
      });
      localStorage.setItem('token', response.data.token);
      alert('Account created successfully!');
      window.location.reload();
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error:', error);
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
            Create an account
          </Typography>
          <Typography color={colors.grey[600]}>
            Register to continue !!
          </Typography>
        </Stack>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Stack spacing={2}>
              <Stack spacing={1}>
                <Typography color={colors.grey[800]}>First Name</Typography>
                <TextField name="fname" value={formData.fname} onChange={handleChange} />
              </Stack>
              <Stack spacing={1}>
                <Typography color={colors.grey[800]}>Last Name</Typography>
                <TextField name="lname" value={formData.lname} onChange={handleChange} />
              </Stack>
              <Stack spacing={1}>
                <Typography color={colors.grey[800]}>Username</Typography>
                <TextField name="username" value={formData.username} onChange={handleChange} />
              </Stack>
              <Stack spacing={1}>
                <Typography color={colors.grey[800]}>Email</Typography>
                <TextField name="email" value={formData.email} onChange={handleChange} />
              </Stack>
              <Stack spacing={1}>
                <Typography color={colors.grey[800]}>Password</Typography>
                <TextField name="password" type='password' value={formData.password} onChange={handleChange} />
              </Stack>
            </Stack>
            <Button
              type="submit"
              variant='contained'
              size='large'
              sx={{
                bgcolor: colors.grey[800],
                "&:hover": {
                  bgcolor: colors.grey[600]
                }
              }}
            >
              Sign up
            </Button>
          </Stack>
        </form>

        <Stack direction="row" spacing={2}>
          <Typography>Already have an account?</Typography>
          <Typography
            onClick={() => onSwitchMode(ScreenMode.SIGN_IN)}
            fontWeight={600}
            sx={{
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            Sign in
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignupForm;
