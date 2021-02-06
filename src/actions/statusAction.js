import Api from '../Api';

const usersApi = new Api();

export const setStatusAction = (id) => {

    return function (dispatch) {

        usersApi.getStatus(id)
            .then(async (data) => {
                const responseStatusArr = data;

                dispatch({
                    type: 'IS_STATUS_INFO',
                    payload: responseStatusArr
                })
            })
    }
}

export const putStatusAction = (status) => {
    
    return function (dispatch) {

        usersApi.putStatus(status)
            .then(async (data) => {
                const responseStatusArr = data;
                if (responseStatusArr.resultCode === 0) {

                    dispatch({
                        type: 'IS_STATUS_INFO',
                        payload: responseStatusArr
                    })
                } 
            })
    }
}
