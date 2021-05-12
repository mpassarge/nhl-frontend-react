import { GET_STANDINGS } from "./types";

const initialState = {
    divisions: [],
    loading: true,
}

const standingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_STANDINGS:
            return {
                ...state,
                divisions: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default standingsReducer;