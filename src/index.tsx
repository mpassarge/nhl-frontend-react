import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global } from "@emotion/react";
import GlobalStyles from "./GlobalStyle";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Global styles={GlobalStyles} />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
