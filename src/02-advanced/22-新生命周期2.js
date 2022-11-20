import React, { Component } from "react";

export default class App extends Component {
  state = {
    text: 'wendy'
  }
  // 获取更新之前的数据，比render相对较晚
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    // 返回记录的状态
    return 100;
  }
  componentDidUpdate(prevProps, prevState, value) {
    // value是获取记录的状态
    console.log("componentDidUpdate", value);
  }
  render() {
    console.log('render');
    return (
      <div>
        <p>新生命周期的2 - getSnapshotBeforeUpdate</p>
        <button onClick={() => {
          this.setState({
            text: 'wendy - re'
          })
        } }>更改state的值</button>
        {this.state.text}
      </div>
    );
  }
}
