import React, { Component } from 'react'

// 生命周期在小于React17使用
export default class App extends Component {
    state = {
        nameValue: 'wendy'
    }
    componentWillUnmount() {
        console.log('将要把状态挂载在dom中：componentWillUnmount -- 仅此一次');
        console.log('可直接获取到state中的数据：this.state.nameValue', this.state.nameValue);
        // dom的数据还没有渲染，第一次上树前 最后一次的修改机会
        this.setState({
            nameValue: 'wendyTan'
        });
    }
    componentDidUpdate() {
        console.log('已经挂载在dom完：componentDidUpdate');
        // 数据的请求
        // 订阅函数的调用
        // setInterval
        // 基于创建完的dom进行初始化， 如：BetterScroll
    }
    render() {
        console.log("在渲染dom的元素： render");
        return (
            <div>App
            <p>生命周期</p>
            </div>
        )
    }
}
