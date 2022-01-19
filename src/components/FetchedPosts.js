import React from 'react'
import { useDispatch, useSelector }  from "react-redux"
import { fetchPosts } from '../redux/actions'
import Post from './Post';

function FetchedPosts() {
    const dispatch = useDispatch();
    const posts = useSelector((state)=>{
        return state.posts.fetchedPosts
    });

    if(!posts.length) {
        return <button 
        className="btn btn-primary"
        onClick={()=>dispatch(fetchPosts())}
        >
            Fetch Posts 
        </button>
    }
    return (
         posts.map(post => <Post post={post} key={post.id} />)
    )
}

export default FetchedPosts
