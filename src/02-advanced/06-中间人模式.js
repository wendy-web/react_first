import axios from 'axios';
import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div style={{background: 'pink'}} onClick={
        () => {
            console.log(this.props.detail)
            this.props.onEvent(this.props.detail);
        }
      }>
        <p>{this.props.id} -- {this.props.name}</p>
        <p>点击查看detail：</p>
        <hr />
      </div>
    )
  }
}

class ItemDetail extends Component {
    render() {
      return (
        <div style={{background: 'gray'}}>
          <p>点击展示的内容：{this.props.detail}</p>
          <hr />
        </div>
      )
    }
  }

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            datailText: ''
        }
        axios.get('/list.json').then((res) => {
            console.log(res.data.data)
            this.setState({
                filmList:res.data.data
            })
        })
    }
  render() {
    return (
      <div>
        <p>
            父组件拿到自组件中点击的detail内容：
            <br />
            {this.state.datailText}
            <hr />
        </p>
        <p>中间人模式 --- 数据列表</p>
        {this.state.filmList.map((item) => {
            return <Item key={item.id} {...item} onEvent={(value) => {
                console.log("父组件中拿大detail", value);
                this.setState({
                    datailText: value
                })
            }}></Item>
        })}
        <ItemDetail detail={this.state.datailText}></ItemDetail>
      </div>
    )
  }
}
