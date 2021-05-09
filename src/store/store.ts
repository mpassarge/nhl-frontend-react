import { createStore } from "redux";
import standingsReducer from "../reducers/standings";
import { devToolsEnhancer } from 'redux-devtools-extension';


const store = createStore(
    standingsReducer,
    devToolsEnhancer({name: 'redux'})
);
export default store;