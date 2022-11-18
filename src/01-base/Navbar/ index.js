import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    const {title, leftShow, rightShow} = this.props;
    return (
      <div>
        {leftShow && <button>back</button>}
        {title}
        {rightShow && <button>home</button>}
      </div>
    )
  }
}
