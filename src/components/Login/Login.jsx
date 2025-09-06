import React from 'react'
import './Login.css'
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
    return (
        <div id='login' onSubmit={
            alert("Login Successfully...")
        } >
            <form action="">
                <span id='logintitle'>Login Page</span>
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' required/>
                </div>
                <div className="list">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' required/>
                </div>
                <button id="loginbtn">Login <FaSignInAlt /></button>
            </form>
        </div>
    )
}

export default Login
