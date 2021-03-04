import Api from '../Api';

const usersApi = new Api();

export const setProfilePageAction = (id) => {

    return async function (dispatch) {

        let responseUsersArr = await usersApi.getUserProfile(id);
        dispatch({
            type: 'IS_USER_INFO',
            payload: responseUsersArr
        })
    }
}
export const putProfilePhotoAction = (profilePhoto) => {

    return async function (dispatch) {

        let data = await usersApi.putProfilePhoto(profilePhoto);
        if (data.resultCode === 0) {
            dispatch({
                type: 'IS_NEW_USER_PHOTO',
                payload: data.data.photos
            })
        }
    }
}
export const setMyOwnProfilePageAction = (id) => {

    return async function (dispatch) {

        let responseUsersArr = await usersApi.getUserProfile(id);
        dispatch({
            type: 'IS_OWNERS_INFO',
            payload: {
                name:responseUsersArr.fullName,
                photo:responseUsersArr.photos.small
            }
        })
    }
}