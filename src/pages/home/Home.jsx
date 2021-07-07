import { useState, useEffect} from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import './home.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function Home() {
    const [posts, setPosts] = useState([])
    const  { search }  = useLocation()
    useEffect(()=>{
        const fecthPosts = async ()=>{
            const res = await axios.get(`http://localhost:8000/api/posts`+search)   
            setPosts(res.data)  
        }
        fecthPosts()
    },[search])
    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </>
    )
}
