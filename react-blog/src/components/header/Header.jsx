import React from 'react'
import "./header.css";
const Header = () => {
  return (
    <>
     <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://res.cloudinary.com/dnksjyovc/image/upload/v1662271085/mkg/mitn-view_ys9zth.jpg"
        alt=""
      />
    </div>
    </>
  
  )
}

export default Header
