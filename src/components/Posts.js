import React from 'react'
import Post from './Post'

function Posts({posts}) {
    if(!posts.length) {
        return <p>No Posts Yet</p>
    }
    return posts.map(post => <Post post={post} key={post} />)
}

export default Posts
