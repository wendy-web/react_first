import React, { Component } from 'react'

export default class App extends Component {
    // state用于变量的定义 - 类似于小程序的setState的值
    constructor() {
        // constructor构造函数的使用，得加super实现继承
        super();
        this.state = {
            inputValue: '',
            todoList: [
                {
                    id:0,
                    text: 'first to do list',
                    checked: false
                },
                {
                    id:1,
                    text: '<i>i标签的展示</i>',
                    checked: false
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='请输入内容' value={this.state.inputValue} onChange={(event) => {
                    this.setState({
                        inputValue: event.target.value
                    })
                }}/>
                <button onClick={this.addHandle}>add</button>
                <p>todoList的列表渲染 - 数组的map映射渲染</p>
                <ul>
                    {/* { renderList } */}
                    {
                        this.state.todoList.map((item, index) => {
                            return (
                            <li key={item.id}>
                                <input 
                                    type='checkbox'
                                    checked={item.checked}
                                    onChange={() => {
                                        this.checkHandle(index);
                                    }}
                                />
                                {/* {item.text} */}
                                {/* 富文本的展示 */}
                                <span
                                    style={ {textDecoration: item.checked && 'line-through'}}
                                    dangerouslySetInnerHTML={
                                        {
                                            __html: item.text
                                        }
                                    }
                                >
                                </span>
                                <button onClick={ () => { this.delectHandle(index) }}>del</button>
                            </li>
                            );
                        })
                    }
                </ul>
                {/* 条件渲染 */}
                {this.state.todoList.length === 0 && <div>暂无代办事项....</div>}
            </div>
        );
    }
    // 勾选事件
    checkHandle(index) {
        const todoList = this.state.todoList.slice(); // 获取到一个新的数组的形式
        todoList[index].checked = !todoList[index].checked;
        this.setState({
            todoList
        })
    }
    // 添加的元素
    addHandle = () => {
        // 不要直接修改state的值
        // 可使用数组的解析[...], 或者使用slice()
        const todoList = [
            ...this.state.todoList, 
            {
                id: Math.random()*1000,
                text: this.state.inputValue,
                checked: false
            }
        ];
        this.setState({
            todoList
        });

        // 清空输入框
        this.setState({
            inputValue: ''
        })
    }
    // 删除的使用
    delectHandle = (index) => {
        console.log("delext的index：", index);
        const todoList = this.state.todoList.slice(); // 获取到一个新的数组的形式
        todoList.splice(index, 1);
        this.setState({
            todoList
        });
    }
}
