import React from 'react'
import { useSelector }  from "react-redux"
import Post from './Post';


function DisplayPosts() {
    const posts = useSelector((state)=>{
        return state.posts.fetchedPosts
    });
    
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id} />)}
        </div>
    )
}

export default DisplayPosts
