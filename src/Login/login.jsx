import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/auth', { email, password });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem('token', token); // Store token in local storage
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  console.log(token);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/user', {
        headers: {
          Authorization: token
        }
      });
      console.log('Data:', response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchData} disabled={!token}>Fetch Protected Data</button>
    </div>
  );
};

export default Login;
