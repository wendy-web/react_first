import React, { Component } from 'react';
import wendyProtypes from 'prop-types';
console.log('属性验证的方法', wendyProtypes);
export default class Navbar extends Component {
    // 静态的方法，可直接使用，无需实例化
    static Navbar = {
        title: wendyProtypes.string,
        leftShow: wendyProtypes.bool,
        rightShow: wendyProtypes.bool
    }
  render() {
    const { title, leftShow, rightShow } = this.props;
    console.log(title, leftShow, rightShow);
    return (
      <div>
        {leftShow && <button>back</button>}
        {title}
        {rightShow && <button>home</button>}
      </div>
    )
  }
}
// 类的属性
// Navbar.prototypes = {
//     title: wendyProtypes.string,
//     leftShow: wendyProtypes.bool,
//     rightShow: wendyProtypes.bool
// }