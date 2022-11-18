import React, { Component } from 'react'

export default class App extends Component {
    // state用于变量的定义 - 类似于小程序的setState的值
    constructor() {
        // constructor构造函数的使用，得加super实现继承
        super();
        this.inputRef = React.createRef();
        this.state = {
            todoList: [{
                id:0,
                text: 'first to do list'
            }]
        }
    }
    render() {
        // const renderList = this.state.todoList.map((item) => <li>{item}</li>)
        return (
            <div>
                <input type='text' placeholder='请输入内容' ref={this.inputRef}/>
                <button onClick={this.addHandle}>add</button>
                <p>todoList的列表渲染 - 数组的map映射渲染</p>
                <ul>
                    {/* { renderList } */}
                    {
                        this.state.todoList.map((item, index) => {
                            return (
                            <li ket={item.id}>
                                {item.text}
                                <button onClick={ () => { this.delectHandle(index) }}>del</button>
                            </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
    // 添加的元素
    addHandle = () => {
        // 不要直接修改state的值
        // 可使用数组的解析[...], 或者使用slice()
        console.log(this.inputRef.current.value);
        const todoList = [
            ...this.state.todoList, 
            {
                id: Math.random()*1000,
                text: this.inputRef.current.value
            }
        ];
        this.setState({
            todoList
        });
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
