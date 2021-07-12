import Post from '../post/Post'
import './posts.css'
import {useState} from 'react'

export default function Posts({posts}) {
    const[openSearch, setOpenSearch]= useState(false)
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value);
      };

      const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
        // if (filteredPosts.length < 1) {
        //     return (
        //     <h2 className='section-title'>
        //         no data
        //     </h2>
        //     )
        // }
          return (     
                <>
                    <div className='posts'>
                        <div className='formSearch'>
                        <form className='search' >
                                {openSearch ? (
                                <input type='text'
                                    className='searchInput'
                                    autoFocus 
                                    onChange={handleChange}
                                    />            
                                )
                                : ''}
                                <i className="topSearchIcon fas fa-search" onClick={()=>setOpenSearch(!openSearch)}/> 
                            </form>
                        </div> 
                        {filteredPosts.map(p =>(
                            <Post key={p._id} post={p}></Post>  
                        ))}
                    </div>
            </> 
    )
}
