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
    paginator:null,
}

function MainReducer(state = initialState, action) {
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
                paginator:action.payload.paginator.pageNumber,
            }
        case 'IS_USERS_FOLLOW':
            return {
                ...state,
                users: state.users.map(item => item.id === action.payload ? { ...item, follow: !item.follow } : item)
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