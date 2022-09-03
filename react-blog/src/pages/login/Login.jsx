import React from 'react'
import "./login.css";
import { Context } from '../../context/Context';
import {useState, useRef, useContext } from 'react';
import axios from 'axios';

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [err,setErr]=useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setErr(true);
    }


  }

  // console.log(user);
  // console.log(isFetching);
  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input className="loginInput" ref={emailRef} type="text" placeholder="Enter your email..." />
          <label>Password</label>
          <input className="loginInput" ref={passwordRef} type="password" placeholder="Enter your password..." />
          <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
        </form>
        {err ? <span style={{ color: "red", marginTop: "10px" }}>Sorry ! Wrong Credential..</span> : <span></span>}
        {/* <button className="loginRegisterButton">Register</button> */}
      </div>

    </>)
}

export default Login;