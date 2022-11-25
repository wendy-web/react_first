function getDate1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data1');
        }, 1000)
    })
}
function getDate2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data2');
        }, 1000)
    })
}
function getDate3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data3');
        }, 1000)
    })
}

function *gen() {
    const f1 = yield getDate1();
    console.log(f1);
    const f2 = yield getDate2(f1);
    console.log(f2);
    const f3 = yield getDate3(f2);
    console.log(f3);
}

// 执行递归
function run(fn) {
    const g = fn();
    function next(data) {
        var result = g.next(data);
        if(result.done) {
            return result.value;
        }
        result.value.then((res) => {
            next(res)
        });
    }
    next();
}

run(gen);