// 1.引入redux
// 2.creatStore(redux)

import { combineReducers, createStore } from "redux";
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
const reducer = combineReducers({
    CityReducer,
    TabbarReducer
});
const store = createStore(reducer);

export default store;