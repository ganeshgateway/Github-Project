import * as types from './actionTypes'

// Initial states
const initialState = {
    fetching: false,
    commitsList: []
};

export default function global(state = initialState, action = {}) {
    switch (action.type) {
        case types.COMMITS_REQUEST_REQUEST:
            return {
                ...state,
                fetching: true,
            }
        case types.COMMITS_REQUEST_SUCCESS:
            return {
                ...state,
                commitsList: action.payload,
                fetching: false,
            }
        case types.COMMITS_REQUEST_FAIL:
            return {
                ...state,
                commitsList: action.payload,
                fetching: false,
            }
        default:
            return state;
    }
}