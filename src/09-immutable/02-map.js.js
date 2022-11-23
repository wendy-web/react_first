import React from 'react';
import { Map } from 'immutable';
const obj1 = {
  name: 'wendy'
}
const oldImmuObj = Map(obj1);
const newImmuObj = oldImmuObj.set('name', 'Tan')
console.log('oldImmuObj:', oldImmuObj);
console.log('newImmuObj:', newImmuObj);
console.log('ImmuObj转换回原本的对象:', oldImmuObj.toJS(), newImmuObj.toJS());
export default function App() {
  return (
    <div>
        <p>immutable不可变对象 - 深拷贝的对象</p>
        <p>用于在shouldComponentUpdate的性能优化中判断</p>
    </div>
  )
}
