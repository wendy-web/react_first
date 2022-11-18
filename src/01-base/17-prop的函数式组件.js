import React, { Component } from 'react'
import Navbar from './Navbar/ index';
import Sidebar from './sidebar/index';
export default class App extends Component {
  render() {
    return (
        <div>
        <p>组件的属性值</p>
        <Navbar title="首页" leftShow={true} rightShow={true}></Navbar>
        <Sidebar bgClor='red'></Sidebar>
        </div>
    )
  }
}
