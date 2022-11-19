import React, { Component } from 'react'
class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}: </label>
                <input
                  type={this.props.type}
                  onChange={(event) => {
                    console.log(event.target.value);
                    this.props.onChangeEvent(event.target.value);
                  }}
                  value={this.props.value}
                />
            </div>
        )
    }
}
export default class App extends Component {
  state = {
    username: localStorage.getItem('username') || '',
    password: ''
  }
  render() {
    return (
      <div>
        <p>登陆页面</p>
        <Field
          label="姓名"
          type="text"
          onChangeEvent={
            (value) => {
              console.log("输入的value的值：", value)
              this.setState({
                username: value
              })
            }
          }
          value={this.state.username}
        ></Field>
        <Field label="密码" type="password" onChangeEvent={
          (value) => {
            console.log("输入的value的值：", value);
            this.setState({
              password: value
            })
          }
        }></Field>
        <button onClick={() => {
          console.log(this.state.username, this.state.password);
        }}>login</button>
        <button onClick={() => {
          this.setState({
            username: '',
            password: ''
          })
        }}>cancel</button>
      </div>
    )
  }
}
