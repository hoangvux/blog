import './header.css'
import blog from '../../assets/1.jpg'



export default function Header() {
  
    return (
        <div className="header">  
        <div className="headerTitles">
          <span className="headerTitleLg">BLOG</span>
        </div>
        <img
          className="headerImg"
          src={blog}
          alt=""
        />
      </div>
      
    )
}
