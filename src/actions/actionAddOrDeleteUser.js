export const AddOrDeleteUser = (id) => {
    return function (dispatch) {
        dispatch({
            type: 'IS_USERS_FOLLOW',
            payload: id,
        })
    }
}