import Api from '../Api';

const usersApi = new Api();

export const postUserFollow = (id) => {
    return async function (dispatch) {

        let data = await usersApi.postUserFollow(id)
        if (data.resultCode === 0) {
            dispatch({
                type: 'IS_USERS_FOLLOW',
                payload: id,
            })
        }
    }
}


export const deleteUserFollow = (id) => {
    return async function (dispatch) {

        let data = await usersApi.deleteUserFollow(id)
        if (data.resultCode === 0) {
            dispatch({
                type: 'IS_USERS_FOLLOW',
                payload: id,
            })
        }
    }
}