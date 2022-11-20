import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: [1, 2,4,43,3,3,2,5,5,3,6,8,8,86,65,4,3,3,37,7,4,7,8,]
  }
  // 获取更新之前的数据，比render相对较晚
  getSnapshotBeforeUpdate() {
    // 获取容器的高度;未更新之前的高度
    console.log(this.listBoxRef.current.scrollHeight);
    return this.listBoxRef.current.scrollHeight;
  }
  listBoxRef = React.createRef();
  componentDidUpdate(prevProps, prevState, value) {
    // value是获取记录的状态
    // console.log("componentDidUpdate", value);
    // 获取更改后的容器高度
    console.log(this.listBoxRef.current.scrollHeight);
    // 设置当前的列表头部的滚动高度
    this.listBoxRef.current.scrollTop += this.listBoxRef.current.scrollHeight - value;

  }
  render() {
    console.log('render');
    return (
      <div>
        <p>新生命周期的2 - getSnapshotBeforeUpdate</p>
        <h1>邮箱的引用</h1>
        <button onClick={() => {
          this.setState({
            list:  [...[323,2,2,2,3], ...this.state.list]
          })
        }}>来邮件</button>
        <div style={{height: '200px', overflow: 'auto',border:'1px solid'}} ref={this.listBoxRef}>
          <ul>
            {
            this.state.list.map((item, index) => {
              return <li key={index} style={{height:'100px', backGround: 'yellow'}}>
                {item}
              </li>
            })
            }
          </ul>
        </div>
      </div>
    );
  }
}
