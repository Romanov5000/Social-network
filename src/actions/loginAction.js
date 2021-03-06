import Api from '../Api';


const usersApi = new Api();

export const postUserLogin = (email, password, rememberMe = false) => {

    return async function (dispatch) {
        let data = await usersApi.postLogin(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch({
                type: 'IS_LOGIN'
            })
        }
        if (data.resultCode === 1) {
            dispatch({
                type: 'IS_LOGIN_ERROR'
            })
        }
    }
}


export const deleteUserLogin = () => {
    return async function (dispatch) {

        let data = await usersApi.deleteLogin();
        if (data.resultCode === 0) {
            dispatch({
                type: 'IS_LOGOUT'
            })
        }

    }
}