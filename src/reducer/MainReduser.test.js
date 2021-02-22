import React from 'react';
import {MainReducer} from './MainReducer';

it ('new post have to be added', () =>{
    let action = {type : 'IS_PUBLICATIONS', payload : 'hello'};
    const state = {publications: [],}
    const newPost = MainReducer(state, action);

    expect(newPost.publications.length).toBe(1)
})