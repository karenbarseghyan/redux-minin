import React from 'react'
import { combineReducers } from "redux"
import { PostsReducer } from './postsReducer'

export const rootReducer = combineReducers({
    posts: PostsReducer
})


