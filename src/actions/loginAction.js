import Api from '../Api';
import { Redirect } from 'react-router-dom';

const usersApi = new Api();

export const postUserLogin = (email, password, rememberMe = false) => {

    return function (dispatch) {
        usersApi.postLogin(email, password, rememberMe)
            .then(async (data) => {
                const responseUsersArr = data;
                console.log(responseUsersArr);
                if (responseUsersArr.resultCode === 0) {
                    // dispatch({
                    //     // type: 'IS_LOGIN'
                    // })
                }
            })

    }
}


// export const deleteUserLogin = () => {
//     return function (dispatch) {

//         usersApi.deleteLogin()
//             .then(async (data) => {
//                 const responseUsersArr = data;
//                 if (responseUsersArr.resultCode === 0) {
//                     dispatch({
//                         type: 'IS_USERS_FOLLOW',
//                         payload: id,
//                     })
//                 }
//             })
//     }
// }