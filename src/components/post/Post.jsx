import "./post.css";
import { Link } from "react-router-dom";


export default function Post({post}) {
  const PF = "http://localhost:8000/images/";
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className='link'>
        {post.photo && 
            <img src={PF + post.photo} alt='' className='postImg' />
        }
      </Link>
      <div className="postInfo">
        <div className="postCats">
               <span className="postCat" >{post.categories}</span>  
        </div>
        <Link to={`/post/${post._id}`} className='link'>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
       {post.desc}
      </p>
    </div>
  );
}