import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk"
import authReducers from "./authReducers";


const store = createStore(
    combineReducers({ authReducers }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

