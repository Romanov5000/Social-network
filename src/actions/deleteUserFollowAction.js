import Api from '../Api';

const usersApi = new Api();

export const deleteUserFollow = (id) => {
    return function (dispatch) {

        usersApi.deleteUserFollow(id)
            .then(async (data) => {
                const responseUsersArr = data;
                if (responseUsersArr.resultCode === 0) {
                    dispatch({
                        type: 'IS_USERS_FOLLOW',
                        payload: id,
                    })
                }
            })
    }
}