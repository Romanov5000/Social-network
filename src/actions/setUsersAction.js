import Api from '../Api';

const usersApi = new Api();

export const setUsersAction = (pageNumber) => {

    return async function (dispatch) {

        let data = await usersApi.getUsers(pageNumber);
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
    }
}