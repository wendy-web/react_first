import React, { Component } from 'react';
import Film from './component/film';
import Cinema from './component/cinema';
import Center from './component/center';
import Tabbar from './component/Tabbar';
import Navbar from './component/Navbar';
export default class App extends Component {
    // state用于变量的定义 - 类似于小程序的setState的值
    constructor() {
        // constructor构造函数的使用，得加super实现继承
        super();
        this.inputRef = React.createRef();
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        return (
            <div className='contect_box'>
                <Navbar event = {
                    (index) => {
                        this.setState({
                            currentIndex: index
                        })
                    }
                }></Navbar>
                {/* <Film></Film>
                <Cinema></Cinema>
                <Center></Center> */}

                {this.whileComponent()}
                <Tabbar event = {
                    (index) => {
                        this.setState({
                            currentIndex: index
                        })
                    }
                }></Tabbar>
            </div>
        );
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
