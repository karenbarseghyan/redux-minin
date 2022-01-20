import React from 'react'
import { useDispatch, useSelector }  from "react-redux"
import { fetchPosts } from '../redux/actions'
import Loader from './Loader';

function FetchedPosts() {
    const dispatch = useDispatch();
    const loading = useSelector((state)=>{
        return state.app.loading
    })

    if(loading) {
        return (
           <Loader />
        )
    }

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
