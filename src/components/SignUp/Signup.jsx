import React from 'react'
import './Signup.css'
import { LuUserRoundPlus } from "react-icons/lu";

const Signup = () => {
    return (
        <div id='signup' onSubmit={
            alert("Sign Up Successfully...")
        }>
            <form action="">
                <span id='signuptitle'>SignUp Page</span>
                <div className="list">
                    <label htmlFor="text">Full Name</label>
                    <input type="text" id='text' required />
                </div>
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' required />
                </div>
                <div className="list">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' required />
                </div>
                <div className="list">
                    <label htmlFor="pass">Confirm Password</label>
                    <input type="password" id='pass' required />
                </div>
                <button id="loginbtn">Sign Up <LuUserRoundPlus /></button>
            </form>
        </div>
    )
}

export default Signup
