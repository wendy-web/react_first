import {take, fork, call, put} from 'redux-saga/effects';
function *watchSaga1() {
    while(true) {
        // take监听组件发来的action
        yield take('get_list1');
        yield fork(getList1);
        // fork 同步的执行异步处理函数
    }
}
function *getList1() {
    // call函数发异步请求
    const res = yield call(getListAction1);
    // put函数发出新的action
    yield put({
        type: 'change_list1',
        payload: res
    })
}

function getListAction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([111,222,333])
        }, 2000)
    })
}

export default watchSaga1;