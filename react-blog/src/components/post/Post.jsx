import React from 'react'
import "./post.css";
import { Link } from 'react-router-dom';
const Posts = ({post}) => {
 // console.log(post);
// const PF = "http://localhost:5000/images/";
  return (
    <>
      <div className="post">
      {post.photo && <img className="postImg" src={`/images/${post.photo}`} alt="post-img" />}
        <div className="postInfo">
          <div className="postCats">
          {post.categories.map((cat,index)=>{
            return(<>
              <span key={index} className="postCat">
              <Link className="link" to="/posts?cat=Music">
               {cat.name}
              </Link>
            </span>
            </>)
          })}
          
          </div>
          <span className="postTitle">
            <Link to={`/post/${post._id}`} className="link">
             {post.title}
            </Link>
          </span>
          <hr />
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
         {post.desc}
        </p>
      </div>
    </>
  )
}

export default Posts;