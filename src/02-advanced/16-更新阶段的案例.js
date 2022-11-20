import React, { Component } from 'react'
class Box extends Component {
    // 进行对比更改来决定是否去执行render
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.current === this.props.index || nextProps.current === nextProps.index) {
            return true;
        }
        return false;
     }
    render() {
        console.log('box的render')
        return (
            <div style={{width: '200px', height: '50px', border:'1px solid'}}>
                {this.props.index}
                {this.props.index === this.props.current && '-- 选中当前'}
            </div>
        )
    }
}
export default class App extends Component {
    state = {
        currentIndex:0,
        list: ['001','002','003','004','005','003','002','008','009']
    }
  render() {
    return (
      <div>
        <p>输入框输入number的值 - 进行选择不同的div</p>
        <input type='number' onChange={(event) => {
            this.setState({
                currentIndex: Number(event.target.value)
            })
        }}/>
        <div style={{display: 'flex',flexWrap:'wrap'}}>
            {this.state.list.map((item, index) => {
                return <Box key={index} current={this.state.currentIndex} index={index}></Box>
            })}
        </div>
      </div>
    )
  }
}
