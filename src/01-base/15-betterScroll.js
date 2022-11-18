import React, { Component } from 'react';
import BScroll from 'better-scroll'


export default class App extends Component {
    state = {
        list: []
    }
    getData = () => {
        const list = [0,0,2,3,4,5,6,6,6,7,77,77,777,1];
        this.setState({
            list
        }, () => {
            // 这里使用异步的创建使用
            new BScroll('.wrapper')
        });
    }
  render() {
    return (
      <div>
        <button onClick={this.getData}>click</button>
        <div
            className="wrapper"
            style={{height: '200px',background:'yellow',overflow: 'hidden'}}
        >
            <ul className="content">
                {this.state.list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            </div>
      </div>
    )
  }
}
