import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserPage from './pages/UserPage';

const App = () => {
  const [appUser, setAppUser] = React.useState(null);

  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        {appUser && <Link to="/logout">Log Out</Link>}
        {!appUser && <Link to="/login"> Login</Link>}
        {!appUser && <Link to="/signup"> Sign Up</Link>}
        {appUser && <Link to="/userpage">User Page</Link>}
      </nav>
      {appUser && <h2>Welcome {appUser}</h2>}
      <Switch>
        <Route path="/login">
          <Login appUser={appUser} setAppUser={setAppUser} />
        </Route>
        <Route path="/signup">
          <Signup appUser={appUser} setAppUser={setAppUser} />
        </Route>
        <Route path="/userpage">
          <UserPage appUser={appUser} setAppUser={setAppUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;