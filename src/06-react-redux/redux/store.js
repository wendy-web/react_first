// 1.引入redux
// 2.creatStore(redux)

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 运用applyMiddleware中间键
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));

export default store;