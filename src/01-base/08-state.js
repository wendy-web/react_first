import React, { Component } from 'react'

export default class App extends Component {
    // state用于变量的定义 - 类似于小程序的setState的值
    state = {
        myText: '收藏',
        myShow: false
    }
    render() {
        return (
            <div>
                <p>state用于变量的定义 - 类似于小程序的setState的值</p>
                <button onClick={ () => {
                    this.setState({
                        myShow: !this.state.myShow
                    });
                } }>
                {this.state.myShow ? '收藏' : '取消收藏'}
            </button>
            </div>
        )
    }
}
