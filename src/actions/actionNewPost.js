export const actionNewPost = (newPost) => {
    const post = {
        text: newPost,
        id: Date.now(),
    };
    return function (dispatch) {
        dispatch({
            type: 'IS_PUBLICATIONS',
            payload: post,
        })
    }
}
export const actionDeletePost = (id) => {
    return function (dispatch) {
        dispatch({
            type: 'IS_DELETE_PUBLICATIONS',
            payload: id,
        })
    }
}