import React, { Component } from 'react';
class Navbar extends Component {
    render() {
      return (
        <div>
            Navbar
            <button onClick={() => {
                // console.log("执行navbar的事件");
                // console.log('父组件中传递过来的函数', this.props.event);
                this.props.event(); // 直接的调用执行
        }}>Navbar - sidebar 的开关</button>
        </div>
      )
    }
}

class Sidebar extends Component {
    render() {
        return (
        <div>
            Sider的组件展示内容
        </div>
        )
    }
}
export default class App extends Component {
    state= {
        isShow: false
    }

  render() {
    return (
      <div>
        <Navbar event= {() => {
            console.log("父组件定义的event的事件,传递回调函数去使用");
            this.setState({
                isShow: !this.state.isShow
            })
        }}></Navbar>
        { this.state.isShow && <Sidebar></Sidebar> }
      </div>
    )
  }
}
