import React, { Component } from 'react'
class Child extends Component {
  componentDidMount() {
    // this是Child组件的实例；
    this.timer = setInterval(() => {
      console.log('计时器的执行')
    }, 1000);
  }
  componentWillUnmount() {
    console.log("组件销毁执行的函数：componentWillUnmount");
    clearInterval(this.timer);
  }
  render () {
    return (
      <div>Childe的组件展示</div>
    )
  }
}
export default class App extends Component {
  state = {
    isShow: true
  }
  render() {
    return (
      <div>
        <p>生命周期的 - 销毁阶段</p>
        <button onClick={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }}>控制组件的显隐</button>
        组件的内容：{ this.state.isShow && <Child></Child>}
      </div>
    )
  }
}
