import Api from '../Api';

const usersApi = new Api();

export const setUsersAction = () => {

    return function (dispatch) {

        usersApi.getUsers()
            .then(async (data) => {
                const responseUsersArr = data.items;

                dispatch({
                    type: 'IS_USERS',
                    payload: responseUsersArr,
                })
            })
    }
}