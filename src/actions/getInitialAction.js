import Api from '../Api';

const usersApi = new Api();

export const setProfilePageAction = () => {
    return function (dispatch) {

        usersApi.getInitial()
            .then(async (data) => {
                const responseUsersArr = data;
                if (responseUsersArr.resultCode === 0) {
                    dispatch({
                        type: 'IS_INITIAL',
                        payload: responseUsersArr.data
                    })
                }
            })
    }
}