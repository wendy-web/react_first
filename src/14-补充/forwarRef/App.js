import React, { Component, forwardRef } from "react";

export default class App extends Component {
  inputRef = React.createRef();
  render() {
    return (
      <div>
        <p>forwarRef的使用</p>
        <button onClick={() => {
            console.log(this.inputRef.current.value)
            this.inputRef.current.value = '';
            this.inputRef.current.focus();
        }}>获取焦点</button>
        <Child ref={this.inputRef}></Child>
      </div>
    );
  }
}
const Child = forwardRef((props, ref) => {
  return (
    <div>
      <label>input的使用：</label>
      <input defaultValue="2222" ref={ref}/>
    </div>
  );
});
