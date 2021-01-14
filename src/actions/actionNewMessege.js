export const actionNewMessage = (message) => {
    const messageArr = {
        messageText: message,
        id: Date.now(),
    };

    return function (dispatch) {
        dispatch({
            type: 'IS_MESSAEGS',
            payload: messageArr,
        })
    }
}