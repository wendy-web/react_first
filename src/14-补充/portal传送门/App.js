import React, { Component } from 'react'
import Dialog from './Dialog'
export default class App extends Component {
  state={
    isShow: false
  }
  render() {
    return (
      <div onClick={() => {
        // 虽然dialog是放入到body中，但在这里的分布是父子组件，所以dialog也可监听到此事件
        console.log('事件的监听机制 - 也可在dialog中监听到该事件')
      }}>
        <p>dialog是放人到body的dom元素下</p>
        <button onClick={() => {
          this.setState({
            isShow: true
          })
        }}>打开弹窗显示</button>
        {this.state.isShow && <Dialog onClose={() =>{
          console.log("closer");
          this.setState({
            isShow: false
          })
        }}></Dialog>}
      </div>
    )
  }
}
