import React, { Component } from 'react'

export default class App extends Component {
    // state用于变量的定义 - 类似于小程序的setState的值
    constructor() {
        // constructor构造函数的使用，得加super实现继承
        super();
        this.state = {
            todoList: ['111', '222', '2344']
        }
    }
    render() {
        // const renderList = this.state.todoList.map((item) => <li>{item}</li>)
        return (
            <div>
                <p>todoList的列表渲染 - 数组的map映射渲染</p>
                <ul>
                    {/* { renderList } */}
                    {
                        this.state.todoList.map((item) => <li ket={item}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}
