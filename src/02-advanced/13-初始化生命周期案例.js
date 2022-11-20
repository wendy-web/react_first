import React, { Component } from 'react';
import BScroll from 'better-scroll';

export default class App extends Component {
    state = {
        list: [1, 2,4,43,3,3,2,5,5,3,6,8,8,86,65,4,3,3,37,7,4,7,8,]
    }
    componentDidMount() {
        console.log("dom渲染完成");
        // dom完成时再进行new BScroll
        new BScroll('#wrapper');
    }
  render() {
    return (
      <div>
        <div id='wrapper' style={{height: '200px', background: 'yellow',overflow: 'hidden'}}>
            <ul>
                {this.state.list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
      </div>
    )
  }
}
