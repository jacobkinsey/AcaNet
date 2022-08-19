import { GET_USER, ADD_USER, DELETE_USER, EDIT_USER, USERS_LOADING, CLEAR_USERS } from '../actions/types';

const initialState = {
    user: {},
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
        case EDIT_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case DELETE_USER:
            return{
                ...state,
                users: state.users.filter(users => users.slug !== action.payload)
            };
        case ADD_USER:
            return{
                ...state,
                users: [action.payload, ...state.users]
            };
        case USERS_LOADING:
            return{
                ...state,
                loading: true
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            };
        default:
            return state;
    }
}