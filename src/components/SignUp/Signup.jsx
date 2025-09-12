import React from 'react'
import './Signup.css'
import { LuUserRoundPlus } from "react-icons/lu";

const Signup = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign Up Successfully...");
  };

  return (
    <div id='signup'>
      <form onSubmit={handleSubmit}>
        <span id='signuptitle'>SignUp Page</span>

        <div className="list">
          <label htmlFor="fullname"><span>Full Name</span></label>
          <input type="text" id='fullname' required />
        </div>

        <div className="list">
          <label htmlFor="email"><span>Email</span></label>
          <input type="email" id='email' required />
        </div>

        <div className="list">
          <label htmlFor="password"><span>Password</span></label>
          <input type="password" id='password' required />
        </div>

        <div className="list">
          <label htmlFor="confirmPass"><span>Confirm Password</span></label>
          <input type="password" id='confirmPass' required />
        </div>

        <button id="signupbtn" type="submit">
          Sign Up <LuUserRoundPlus />
        </button>
      </form>
    </div>
  );
};

export default Signup;
