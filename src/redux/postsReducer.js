import { CREATE_POST } from "./types";

const initialState = {
    posts: [],
    fetchedPOsts: []
}

export const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: 
            return ({
                ...state,
                posts: [...state.posts, action.payload]
            })
        default: return state;
            
    }
}