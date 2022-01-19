import React from 'react'

function FetchedPosts({posts}) {
    if(!posts.length) {
        return <p>No Posts Yet</p>
    }
    return (
        <div>
            Fetched-Posts
        </div>
    )
}

export default FetchedPosts
