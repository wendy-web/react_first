import {take, fork, takeEvery, call, put} from 'redux-saga/effects';
function *watchSaga2() {
    // while(true) {
    //     // take监听组件发来的action
    //     yield take('get_list2');
    //     yield fork(getList2);
    //     // fork 同步的执行异步处理函数
    // }

    yield takeEvery('get_list2', getList2)

}
function *getList2() {
    // call函数发异步请求
    const res1 = yield call(getListAction2_1); // 阻塞调用fn
    const res2 = yield call(getListAction2_2, res1); // 链式调用fn

    // put函数发出新的action
    yield put({
        type: 'change_list2',
        payload: res2
    })
}

function getListAction2_1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([222,333])
        }, 2000)
    })
}

function getListAction2_2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([...data, 77, 88])
        }, 2000)
    })
}

export default watchSaga2;