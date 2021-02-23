import Api from '../Api';

const usersApi = new Api();

export const setStatusAction = (id) => {

    return async function (dispatch) {

        let data = await usersApi.getStatus(id);
        dispatch({
            type: 'IS_STATUS_INFO',
            payload: data
        })
    }
}

export const putStatusAction = (status) => {

    return async function (dispatch) {

        let data = await usersApi.putStatus(status);
        if (data.resultCode === 0) {
            dispatch({
                type: 'IS_STATUS_INFO',
                payload: data
            })
        }
    }
}
