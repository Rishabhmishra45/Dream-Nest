import React from 'react'
import './Login.css'
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Login Successfully...");
  };

  return (
    <div id='login'>
      <form onSubmit={handleSubmit}>
        <span id='logintitle'>Login Page</span>

        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' required />
        </div>

        <div className="list">
          <label htmlFor="pass">Password</label>
          <input type="password" id='pass' required />
        </div>

        <button id="loginbtn" type="submit">
          Login <FaSignInAlt />
        </button>
      </form>
    </div>
  );
};

export default Login;
