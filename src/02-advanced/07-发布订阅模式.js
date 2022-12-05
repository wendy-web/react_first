import React, { Component } from 'react';
export default class App extends Component {
  render() {
    return (
      <div>
        <p>发布订阅模式</p>
      </div>
    )
  }
}
let bus = {
    list: [],
    // 订阅者的模式
    subscribe (callback){
        callback();
        this.list.push(callback)
    },
    // 发布者的模式
    publish() {
        // 遍历所有的订阅者，进行发布
        this.list.forEach(callback => {
            callback && callback();
        })

    }
}
bus.subscribe(() => {
    console.log('000')
})
bus.subscribe(() => {
    console.log('111')
});