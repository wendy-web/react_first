// 1.引入redux
// 2.creatStore(redux)

import { applyMiddleware, combineReducers, createStore } from "redux";
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";
import reduxThunk from 'redux-thunk';
const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
});
// 运用applyMiddleware中间键
const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;