import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

export default function Sidebar() {
    const [cats, setCats] = useState([])
    const { user } = useContext(Context)
    const PF = "http://localhost:8000/images/";
    useEffect( () => {
        const getCats = async ()=>{
        const res =  await axios.get("http://localhost:8000/api/categories/")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
            <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                    {user && <img src={PF + user.profilePic}alt="" />}
                <p>
                    sdffdsasffffffffffffffasdf
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c =>(
                        <Link to={`/?cat=${c.name}`} className='link' key={c._id}>
                            <li className="sidebarListItem" > {c.name} </li>
                        </Link>
                     ))} 
                    
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
