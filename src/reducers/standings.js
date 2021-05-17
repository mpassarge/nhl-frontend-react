import { PIN_DIVISION, SET_STANDINGS } from "./types";
import update from 'immutability-helper';

const initialState = {
    divisions: [],
};

const standingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STANDINGS:
            return {
                ...state,
                divisions: action.payload.sort((a,b) => a.id - b.id),
            };
        case PIN_DIVISION:
            const index = state.divisions.findIndex(d => d.id === action.payload);
            const divisions = update(state.divisions, {
                    [index]: {
                        pinned: {
                            $set: !state.divisions[index].pinned
                        }
                    }
            });
            divisions.sort((a,b) => b.pinned - a.pinned || a.id - b.id);
            return {
                ...state,
                divisions: divisions,
            }
        default:
            return state;
    }
};

export default standingsReducer;
