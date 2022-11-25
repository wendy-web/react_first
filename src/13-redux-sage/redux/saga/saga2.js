import {take, fork, call, put} from 'redux-saga/effects';
function *watchSaga2() {
    while(true) {
        // take监听组件发来的action
        yield take('get_list2');
        yield fork(getList2);
        // fork 同步的执行异步处理函数
    }
}
function *getList2() {
    // call函数发异步请求
    const res = yield call(getListAction2);
    // put函数发出新的action
    yield put({
        type: 'change_list2',
        payload: res
    })
}

function getListAction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([222,333])
        }, 2000)
    })
}

export default watchSaga2;