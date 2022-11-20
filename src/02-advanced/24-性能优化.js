import React, { PureComponent } from 'react'
// PureComponent就是优化后的监听，
// 会比较新旧props的数据
export default class App extends PureComponent {
  state={
    nameValue: 'wendy'
  }
  componentDidUpdate(prevProps, prevState){
    console.log('更新阶段，更新完成；componentDidUpdate');
  }
  
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => {
          this.setState({
            nameValue: 'stateName'
          })
        }}>click更改state的值</button>
        <p>{this.state.nameValue}</p>
      </div>
    )
  }
}
