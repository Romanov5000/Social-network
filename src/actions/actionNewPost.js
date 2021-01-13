export const a = (newPost) => {
    const post = {
        text: newPost,
        id: Date.now(),
    };

    return function (dispatch) {
        dispatch({
            type: "IS_PUBLICATIONS",
            payload: post,
        })
    }
}