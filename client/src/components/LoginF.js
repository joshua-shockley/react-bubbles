import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';



const LoginF = (props) => {
  const[credentials, setCredentials] = useState({username: '', password: ''})

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name] : e.target.value});
  };
  // make a post request to retrieve a token from the api

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
      console.log(res.data.payload);
      localStorage.setItem('token', res.data.payload);
        // when you have handled the token, navigate to the BubblePage route
      props.history.push('/bubblePage');
    })
    .catch(err => 
      console.log(err)
    );
  };


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={login}> 
        <fieldset>
        <input
              className="form-input"
              type="text"
              name="username"
              placeholder="name here"
              value={credentials.username}
              onChange={handleChange}
          />

          <input
              className="form-input"
              type="password" 
              name="password"
              placeholder="password"
              value={credentials.password}
              onChange={handleChange}
          />
          <button
          className="form-btn"
          type="submit"
          >login button</button>
          
        </fieldset>
      </form>
    </>
  );
};

export default LoginF;
