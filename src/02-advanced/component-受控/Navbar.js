import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div className='navbar' style={{background:'pink', textAlign: 'center', overflow: 'hidden'}}>
            <button style={{float: 'left'}}>back</button>
            头部的Navbar
            <button style={{float: 'right'}} onClick={() => {
                this.props.event(2);
            }}>center</button>
        </div>
    )
  }
}
