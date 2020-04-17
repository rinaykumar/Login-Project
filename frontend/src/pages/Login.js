import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = ({appUser, setAppUser}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleAuth = () => {
    const body = {
      username: username,
      password: password
    };
    axios.post('/api/authenticate', body)
      .then((res) => {
        console.log(res.data); // DTO from Spark
        if(res.data.success){
          console.log('Worked');
          setAppUser(username);
        }else{
          setError(res.data.error);
        }
      })
      .catch(() => {
        setError("Failed to register");
      });
  };

  if (appUser) {
    return <Redirect to="/userpage"/>;
  }

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button disabled={!username || !password} onClick={handleAuth}>Log In</button>
      </div>
      {error && <strong>{error}</strong>}
    </div>
  );
};

export default Login;
