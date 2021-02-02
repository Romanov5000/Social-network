import Api from '../Api';

const usersApi = new Api();

export const setProfilePageAction = (id) => {

    return function (dispatch) {

        usersApi.getUserProfile(id)
            .then(async (data) => {
                const responseUsersArr = data;

                dispatch({
                    type: 'IS_USER_INFO',
                    payload: responseUsersArr
                })
            })
    }
}