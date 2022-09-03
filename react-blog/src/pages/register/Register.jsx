import React from 'react'
import "./register.css";
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      //console.log(res);
      res.data && window.location.replace("/login");

    } catch (error) {
      console.log(err);
      setError(true);
    }

  }
  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input className="registerInput" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your username..." />
          <label>Email</label>
          <input className="registerInput" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email..." />
          <label>Password</label>
          <input className="registerInput" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password..." />
          <button className="registerButton">Register</button>
        </form>
        {/* <button className="registerLoginButton">Login</button> */}
        {err ? <span style={{ color: "red", marginTop: "10px" }}>Something Went wrong..</span> : <span></span>}

      </div>
    </>
  )
}

export default Register;