import React, { Component } from 'react';


function Swiper() {
    return <div>
        Swiper的函数式组件
    </div>
}
class Navbar extends Component {
    render() {
        return <div>
            Navbar的函数式组件
            <NavbarChild></NavbarChild>
        </div>
    }
}

class NavbarChild extends Component {
    render() {
        return <div>
            ------ NavbarChild的函数式组件
        </div>
    }
}
export default class App extends Component {
  render() {
    return (
      <div>
         <Swiper></Swiper>
         <Navbar></Navbar>
      </div>
    )
  }
}
