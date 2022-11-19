import React, { Component } from 'react'
class Field extends Component {
    state={
      value: ''
    }
    // 清空的方法
    clearInput() {
      this.setState({
        value: ''
      })
    }
    render() {
        return (
            <div>
                <label>{this.props.label}: </label>
                <input
                  type={this.props.type}
                  onChange={(event) => {
                    console.log(event.target.value);
                    this.setState({
                      value: event.target.value
                    })
                  }}
                  value= {this.state.value}
                />
            </div>
        )
    }
}
export default class App extends Component {
  userNameRef = React.createRef();
  passWordRef = React.createRef();
  render() {
    return (
      <div>
        <p>登陆页面</p>
        <Field label="姓名" type="text" ref={this.userNameRef}></Field>
        <Field label="密码" type="password" ref={this.passWordRef}></Field>
        <button onClick={() => {
          console.log('userNameRef:', this.userNameRef.current.state.value);
          console.log('passWordRef:', this.passWordRef.current.state.value);
        }}>login</button>
        <button onClick={() => {
          console.log(this.userNameRef.current)
          this.userNameRef.current.clearInput();
          this.passWordRef.current.clearInput();
        }}>cancel</button>
      </div>
    )
  }
}
