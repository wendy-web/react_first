// 状态机的使用
// 携程机

// redux-sage

function *test() {
    console.log(0)
    yield;
    console.log(1);
    yield;
    console.log(2)
}

// next的驱动执行
const testFun = test();
testFun.next();
testFun.next();
testFun.next();