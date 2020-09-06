import * as types from './actionTypes'

// Initial states
const initialState = {
    fetching: false,
    commentsList: [],
};

export default function global(state = initialState, action = {}) {
    switch (action.type) {
        case types.COMMENTS_REQUEST_REQUEST:
            return {
                ...state,
                fetching: true,
            }
        case types.COMMENTS_REQUEST_SUCCESS:
            return {
                ...state,
                commentsList: action.payload,
                fetching: false,
            }
        case types.COMMENTS_REQUEST_FAIL:
            return {
                ...state,
                commentsList: action.payload,
                fetching: false,
            }
        default:
            return state;
    }
}