import React, { Component } from 'react';
import './css/01-index.css'

export default class App extends Component {
  render() {
    let isShow = false;
    let name = 'wendy';
    let styleObj = {
        color: 'red',
        fontSize: '30px'
    }

    return (
      <div>
        <p>变量与逻辑代码的引用 - 单花括号的使用</p>
        {name}
         - 
        {isShow ? 'show' : 'hidden' }
         - 
        {10 + 30}
        <div style={styleObj}>style的使用 color的设置 --- fontSize的驼峰式</div>
        <div className='classStyle'>
            className的@import的引用文件的使用
            <p>注：class的类名与es6中的类冲突，这里使用className的形式定义dom的类名</p>
            <label htmlFor='nameInp'>姓名</label>
            <input id='nameInp' type='text' placeholder='请输入姓名'/>
            <p>注：label标签与input中对应id的for，也交替的使用htmlFor的关键字</p>
        </div>

      </div>
    )
  }
}
