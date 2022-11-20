import React, { Component } from 'react'
class Box extends Component {
    // 最先获取到父组件传来的属性
    UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        console.log('UNSAFE_componentWillReceiveProps')
     }
    render() {
        console.log('box的render');
        return (
            <div>
                Box的组件
            </div>
        )
    }
}
export default class App extends Component {
    state = {
        text: '222'
    }
  render() {
    return (
      <div>
        {this.state.text}
        <button onClick={() => {
            this.setState({
                text: '111'
            })
        }}>更改state的值</button>
        <Box></Box>
      </div>
    )
  }
}
