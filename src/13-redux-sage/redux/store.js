// import { createStore } from "react-dedux/src/types";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import watchSaga from "./saga";

// 生成saga的对象引用在此
const SagaMidllWare = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(SagaMidllWare));

// 任务的执行
SagaMidllWare.run(watchSaga);
export default store;