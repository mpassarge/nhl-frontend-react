import { combineReducers } from "redux";
import standingsReducer from "./standings";

export default combineReducers({
    standings: standingsReducer,
});
