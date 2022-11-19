import axios from 'axios'
import React, { Component } from 'react';

const GlobalContext = React.createContext();
class Item extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
            return <div style={{background: 'pink'}} onClick={
              () => {
                  console.log(this.props.detail);
                  value.changeInfo(this.props.detail);
              }
            }>
              <p>{this.props.id} -- {this.props.name}</p>
              <p>点击查看detail：</p>
            </div>
          }
        }
      </GlobalContext.Consumer>
    )
  }
}

class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      infoDetail: ''
    }
  }
    render() {
      return (
      <GlobalContext.Consumer>
        {
          (value) => <div style={{background: 'gray'}}>
          <p>点击展示的内容：{value.info}</p>
        </div>
        }
      </GlobalContext.Consumer>
      )
    }
  }

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            info: ''
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
      <GlobalContext.Provider value={
        {
          info: this.state.info,
          changeInfo: (value) => {
            console.log('0000', value)
            this.setState({
              info: value
            })
          }
        }
      }>
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
      </GlobalContext.Provider>
    )
  }
}
