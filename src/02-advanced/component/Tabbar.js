import React, { Component } from 'react'
import '../css/12-选项卡.css';
export default class Tabbar extends Component {
    state = {
        currentIndex: 0,
        selList: [
            {
                id:0,
                text: '电影'
            },
            {
                id:1,
                text: '影院'
            },
            {
                id:2,
                text: '我的'
            }
        ]
    }
    selClickHandle = (index) => {
        this.setState({
            currentIndex: index
        });
        this.props.event(index);
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.state.selList.map((item, index) => {
                    return  <li
                        key={item.id}
                        className = {this.state.currentIndex === index ? 'active' : ''}
                        onClick={() => this.selClickHandle(index)}
                    >
                        {item.text}
                    </li>
                })
            }
        </ul>
      </div>
    )
  }
}
