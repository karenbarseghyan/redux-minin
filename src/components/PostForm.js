import React, { Component } from 'react'
import { connect } from "react-redux"
import { createPost } from '../redux/actions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }
    
    submitHandler = (ev) => {
        ev.preventDefault();
        // console.log(this.state.title);
        this.setState({
            title:""
        })
        const {title} = this.state;
        if(!title.trim()){
            return
        }
        const newPost = {
            title, 
            id: Date.now().toString()
        }
        console.log("newPost", newPost);
        this.props.createPost(newPost)
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

const mapDisptchToProps = {
    createPost
}

export default connect(null, mapDisptchToProps)(PostForm)
