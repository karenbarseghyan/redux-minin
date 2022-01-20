import React from 'react'
import { combineReducers } from "redux"
import { appReducer } from './appReducer'
import { PostsReducer } from './postsReducer'

export const rootReducer = combineReducers({
    posts: PostsReducer,
    app: appReducer
})


