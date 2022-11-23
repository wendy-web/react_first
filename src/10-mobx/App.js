import React from 'react';
import {observable, autorun} from 'mobx';

const observableNum = observable.box('10');
const observableName = observable.box('Tan');
const observableObj = observable.map({
    name: 'wendy',
    age: 18
})
// 第一次执行，之后每次的更改都会执行
// 且只要有涉及的变量，更改就会执行
autorun(() => {
    console.log('获取到监听值',observableNum.get())
});
autorun(() => {
    console.log('获取到监听的值',observableNum.get())
});

// 
autorun(() => {
    console.log('获取到监听的值',observableObj.get('age'))
});
setTimeout(() => {
    // 更改值的更改
    observableNum.set(23);
    observableName.set('wendy');
    observableObj.set('name', 'Tan')
}, 1000);
export default function App() {
  return (
    <div>
        <p>App - mobx</p>
    </div>
  )
}
