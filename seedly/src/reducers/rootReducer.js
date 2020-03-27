import { combineReducers } from 'redux';

const postReducer = (state = {}) =>{
    return state
}

const selectedPostReducer = (state = {}) =>{
    return state
}

export default combineReducers({
    posts: postReducer,
    selected_posts: selectedPostReducer

});