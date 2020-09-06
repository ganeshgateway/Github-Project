import * as types from './actionTypes'

// Initial states
const initialState = {
    fetching: false,
    userList: [],
    pullList: []
};

export default function global(state = initialState, action = {}) {
    switch (action.type) {
        case types.PULL_REQUEST_REQUEST:
            return {
                ...state,
                fetching: true,
            }
        case types.PULL_REQUEST_SUCCESS:
            return {
                ...state,
                pullList: action.payload,
                fetching: false,
            }
        case types.PULL_REQUEST_FAIL:
            return {
                ...state,
                pullList: action.payload,
                fetching: false,
            }
        default:
            return state;
    }
}