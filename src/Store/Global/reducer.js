import * as types from './actionTypes'

// Initial states
const initialState = {
    loading: false,
};

export default function global(state = initialState, action = {}) {
    switch (action.type) {
        case types.API_LOADING_START:
            // console.log("api loading")
            return {
                ...state, 
                loading: true
            };
        case types.API_LOADING_STOP:
            return {
                ...state, 
                loading: false
            };
        case types.LOCALSTORAGEVALUE:
            return {
                ...state, 
                hospitalObj: action.payload
            };
        case types.MAKEDEFAULTICUOBJ:
            return {
                ...state, 
                makeDefaultICUObj: action.payload
            };
        default:
            return state;
    }
}