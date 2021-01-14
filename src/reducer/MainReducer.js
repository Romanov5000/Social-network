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
        default:
            return state;
    }

}

const store = createStore(
    MainReducer,
    applyMiddleware(thunk)
);

export default store;