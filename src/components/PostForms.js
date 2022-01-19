import React, { useState } from 'react'

function PostForms() {
    const [name, setName] = useState("");

    const changeInputHandler = (ev) => {
        console.log(ev.target.value)
        setName(ev.target.value);
        
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log("wholeName = ",name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Post Title </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value={name}
                        onChange={changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
        </form>
    )
}

export default PostForms
