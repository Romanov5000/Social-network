import Api from '../Api';

const usersApi = new Api();

export const setUsersAction = (pageNumber) => {

    return function (dispatch) {

        usersApi.getUsers(pageNumber)
            .then(async (data) => {
                const responseUsersArr = data.items;

                dispatch({
                    type: 'IS_USERS',
                    payload: {
                        responseUsersArr,
                        paginator: {
                            pageNumber: pageNumber || 1,
                        }
                    },
                })
            })
    }
}