import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";
import reduxThunk from 'redux-thunk';

import reduxPromise from 'redux-promise';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
});

//在localStorge中生成key为root的值
const persistConfig = {
    key: 'wendy',
    storage,
    whitelist:['CityReducer'], // 持久化的数据
}
const myPersistReducer = persistReducer(persistConfig, reducer);



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 运用applyMiddleware中间键
const store = createStore(myPersistReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));
const persistor = persistStore(store);
export  {
    store,
    persistor

};