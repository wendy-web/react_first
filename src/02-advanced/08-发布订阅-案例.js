import axios from 'axios'
import React, { Component } from 'react';
const bus = {
  list: [],
  // 订阅者的模式
  subscribe (callback){
      callback();
      this.list.push(callback)
  },
  // 发布者的模式
  publish(info) {
      // 遍历所有的订阅者，进行发布
      this.list.forEach(callback => {
          callback && callback(info);
      })

  }
}
class Item extends Component {
  render() {
    return (
      <div style={{background: 'pink'}} onClick={
        () => {
            console.log(this.props.detail);
            bus.publish(this.props.detail)
        }
      }>
        <p>{this.props.id} -- {this.props.name}</p>
        <p>点击查看detail：</p>
      </div>
    )
  }
}

class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      infoDetail: ''
    }
    // 订阅者
    bus.subscribe((info) => {
      this.setState({
        infoDetail: info
      })
    })
  }
    render() {
      return (
        <div style={{background: 'gray'}}>
          <p>点击展示的内容：{this.state.infoDetail}</p>
        </div>
      )
    }
  }

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
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
        </p>
        <p>中间人模式 --- 数据列表</p>
        {this.state.filmList.map((item) => {
            return <Item key={item.id} {...item}></Item>
        })}
        <ItemDetail></ItemDetail>
      </div>
    )
  }
}
