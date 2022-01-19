import React, { useState } from 'react'
import { connect } from "react-redux"
import { createPost } from '../redux/actions';

function PostForms(props) {
    const [title, setTitle] = useState("");

    const changeInputHandler = (ev) => {
        setTitle(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setTitle("");
        if(!title.trim()){
            return
        }
        const newPost = {
            title, 
            id: Date.now().toString()
        }
        props.createPost(newPost)
    }

    return (
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Post Title </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value={title}
                        onChange={changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
        </form>
    )
}

const mapDisptchToProps = {
    createPost
}

export default connect(null, mapDisptchToProps)(PostForms)
