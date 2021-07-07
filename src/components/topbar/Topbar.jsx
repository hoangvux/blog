import './topbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'
export default function Topbar() {

    
    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:8000/images/"

    const handleLogOut = () =>{
        dispatch( { type:'LOGOUT' } )
    }
   
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/' className='link'>
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                    <Link to='/about' className='link'>
                            ABOUT
                        </Link>
                    </li>
                    <li className="topListItem">
                    <Link to='/contact' className='link'>
                            CONTACT
                        </Link>
                    </li>
                    <li className="topListItem">
                    <Link to='/write' className='link'>
                            WRITE
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                <Link to='/settings'>
                    <img
                    className='topImg'
                    src={PF+user.profilePic}
                    alt=''
                    />
                </Link>
                ):(
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/login' className='link'>
                            Login
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/register' className='link'>
                            Register
                        </Link>
                    </li>
                </ul>
                )}
                <ul className="log-out">
                    <li className="logOutItem">
                    <Link to='/logout' className='link' onClick={handleLogOut}>
                            { user && "Logout"}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
