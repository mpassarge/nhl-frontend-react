import { GET_STANDINGS } from "./types";

const initialState = {
    standings: [],
    loading: true,
}

const standingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_STANDINGS:
            return {
                ...state,
                standings: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default standingsReducer;