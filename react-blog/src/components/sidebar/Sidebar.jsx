import React from 'react'
import "./sidebar.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Sidebar = () => {


  const [cat, setCat] = useState([]);
  //console.log(cat);
  useEffect(() => {
    const getCatData = async () => {
      const getCat = await axios.get("/categories");
      setCat(getCat.data);
    }
    getCatData();

  }, []);


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="/images/manishgupta.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((cats, index) => {
            return (<>
              <li className="sidebarListItem" key={index}>
                <Link className="link" to={`/?cat=${cats.name}`}>
                  {cats.name}
                </Link>
              </li>
            </>)
          })}

        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;