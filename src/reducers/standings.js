import { SET_STANDINGS } from "./types";

const initialState = {
    divisions: []
}

const standingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_STANDINGS:
            return {
                ...state,
                divisions: action.payload
            }
        default:
            return state
    }
}

export default standingsReducer;