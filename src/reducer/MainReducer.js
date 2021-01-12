import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const initialState = {
    dialogNameList: [
        { name: 'Vlad', id: 1 },
        { name: 'Vera', id: 2 },
        { name: 'Julia', id: 3 },
        { name: 'Tania', id: 4 },
    ],
    dialogMessagesList: [
        {text: 'pi', id:1},
        {text: 'do', id:2},
        {text: 'r', id:3},
    ],
    publications:[],
}

function MainReducer(state = initialState, action) {
    switch (action.type) {
        case 'IS_PUBLICATIONS':
            return {
                ...state,
                publications: [action.payload,...state.publications]
            };
        default:
            return state;
    }

}

const store = createStore(
    MainReducer,
    applyMiddleware(thunk)
);

export default store;