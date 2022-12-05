import React, { Component } from 'react';
import Film from './component/film';
import Cinema from './component/cinema';
import Center from './component/center';
import './css/12-选项卡.css';

export default class App extends Component {
    // state用于变量的定义 - 类似于小程序的setState的值
    constructor() {
        // constructor构造函数的使用，得加super实现继承
        super();
        this.inputRef = React.createRef();
        this.state = {
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
    }
    render() {
        return (
            <div className='contect_box'>
                {/* <Film></Film>
                <Cinema></Cinema>
                <Center></Center> */}

                {this.whileComponent()}
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
        );
    }
    selClickHandle = (index) => {
        this.setState({
            currentIndex: index
        })
    }
    whileComponent (condition) {
        switch(this.state.currentIndex) {
            case 0:
                return <Film></Film>;
            case 1:
                return <Cinema></Cinema>;
            case 2:
                return <Center></Center>;
            default:
                return null;
        }
    }
}
