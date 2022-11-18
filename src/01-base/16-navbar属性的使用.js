import React, { Component } from 'react'
import Navbar from './Navbar/ index'
export default class App extends Component {
  render() {
    return (
      <div>
        <p>组件的属性值</p>
        <Navbar title="首页" leftShow={true} rightShow={true}></Navbar>
        <hr />
        <Navbar title="列表" leftShow={true}></Navbar>
        <hr />
        <Navbar title="detail" rightShow={true}></Navbar>
        <hr />
        <Navbar rightShow={true}></Navbar>

      </div>
    )
  }
}
