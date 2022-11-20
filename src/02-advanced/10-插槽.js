import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
        <div>
            <p>child组件的内容 - 获取回来的this.props.children是插槽的内容数组，可进行一个数组的遍历，相当于vue的具名插槽</p>
            {this.props.children[2]}
            {this.props.children[0]}
            {this.props.children[1]}
            <hr />
        </div>
        )
    }
}

export default class APP extends Component {
  render() {
    return (
      <div>
        <p>插槽的展示：</p>
        <Child>
            <div>child中的插槽的内容1</div>
            <div>child中的插槽的内容2</div>
            <div>child中的插槽的内容3</div>
        </Child>
      </div>
    )
  }
}
