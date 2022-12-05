import React, { Component } from 'react'
class Navbar extends Component {
    render() {
      return (
        <div>
            Navbar
            {/* 留好组件的插槽位置 */}
            {this.props.children}
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
        <Navbar>
          {/* 插槽的内容 */}
          <button onClick={() => {
            this.setState({
              isShow: !this.state.isShow
            })
          }}>Navbar - sidebar 的开关</button>
        </Navbar>
        <hr />
        <p>底下是展示sider的组件： isShow的值控制：</p>
        { this.state.isShow && <Sidebar></Sidebar> }
      </div>
    )
  }
}
