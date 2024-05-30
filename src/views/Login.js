// src/views/Login.js

import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { googleOAuthLogin, githubOAuthLogin } from '../controllers/AuthController';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await appwrite.account.createSession(email, password);
      console.log(response);
      // Handle successful login
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      <Button variant="contained" color="primary" onClick={googleOAuthLogin} style={{ marginTop: 10 }}>
        Login with Google
      </Button>
      <Button variant="contained" color="primary" onClick={githubOAuthLogin} style={{ marginTop: 10 }}>
        Login with GitHub
      </Button>
    </Container>
  );
}
