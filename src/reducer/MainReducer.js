import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const initialState = {
    dialogNameList: [
        { name: 'Vlad', id: 1 },
        { name: 'Vera', id: 2 },
        { name: 'Julia', id: 3 },
        { name: 'Tania', id: 4 },
    ],
    dialogMessagesList: [],
    publications: [],
    users: [],
    paginator: null,
    userInfo: [],
    initial: [],
    isAuth: false,
    isAuthError: false,
    status: null,
}

export function MainReducer(state = initialState, action) {
    switch (action.type) {
        case 'IS_PUBLICATIONS':
            return {
                ...state,
                publications: [action.payload, ...state.publications]
            };
        case 'IS_MESSAEGS':
            return {
                ...state,
                dialogMessagesList: [...state.dialogMessagesList, action.payload]
            }
        case 'IS_USERS':
            return {
                ...state,
                users: action.payload.responseUsersArr,
                paginator: action.payload.paginator.pageNumber,
            }
        case 'IS_USERS_FOLLOW':
            return {
                ...state,
                users: state.users.map(item => item.id === action.payload ? { ...item, followed: !item.followed } : item)
            }
        case 'IS_USER_INFO':
            return {
                ...state,
                userInfo: action.payload
            }
        case 'IS_INITIAL':
            return {
                ...state,
                initial: action.payload,
                isAuth: true
            }
        case 'IS_LOGIN':
            return {
                ...state,
                isAuth: true,
                isAuthError: false
            }
        case 'IS_LOGIN_ERROR':
            return {
                ...state,
                isAuthError: true
            }
        case 'IS_LOGOUT':
            return {
                ...state,
                isAuth: false
            }
        case 'IS_STATUS_INFO':
            return {
                ...state,
                status: action.payload,
            }
        default:
            return state;
    }

}

const store = createStore(
    MainReducer,
    applyMiddleware(thunk)
);

export default store;