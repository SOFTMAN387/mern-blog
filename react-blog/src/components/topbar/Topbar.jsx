import React from 'react'
import "./topbar.css";
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useContext } from 'react';

const Topbar = () => {
  const {user,dispatch}=useContext(Context);
 const handleLogOut =async()=>{
  dispatch({type:"LOGOUT"});
 }
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {user && <li className="topListItem" onClick={handleLogOut}>LOGOUT</li>}
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link className="link" to="/setting">
              <img
                className="topImg"
                src={`/images/${user.profilePic}`}
                alt=""
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  )
}

export default Topbar;