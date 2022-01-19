import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }
    
    submitHandler = (ev) => {
        ev.preventDefault();
        console.log(this.state.title)
    }

    changeInputHandler = (ev) => {
        this.setState(prev => ({...prev,...{
            [ev.target.name]:ev.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Post Title </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        )
    }
}

export default PostForm
