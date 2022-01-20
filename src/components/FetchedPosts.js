import React from 'react'
import {  useDispatch }  from "react-redux"
import { fetchPosts } from '../redux/actions'

function FetchedPosts() {
    const dispatch = useDispatch();
    const handleClick = (e) =>{
        dispatch(fetchPosts());
    }
    
    return (
        <div>
            <button 
                className="btn btn-primary"
                onClick={handleClick}
            >
                Fetch Posts 
            </button>
        </div>
    )
}

export default FetchedPosts
