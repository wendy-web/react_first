import React, { Component, useEffect } from 'react'
function Child () {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('计时器的执行')
        }, 1000);
        return () => {
            // 空数组传递，无依赖；只执行一次
            console.log('组件与销毁');
            clearInterval(timer);
        }
    }, []);
    return (
        <div>Childe的组件展示</div>
    )
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
