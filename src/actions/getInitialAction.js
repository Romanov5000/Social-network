import Api from '../Api';

const usersApi = new Api();

export const setProfilePageAction = () => {
    return async function (dispatch) {

        let responseUsersArr = await usersApi.getInitial();
        if (responseUsersArr.resultCode === 0) {
            dispatch({
                type: 'IS_INITIAL',
                payload: responseUsersArr.data
            })
        }
    }
}