import React, { Component } from 'react';
import WendySwiper from './swiper/Swiper';
import WendySwiperItem from './swiper/SwiperItem';


export default class App extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list: ['999','000','200']
      })
    }, 0)
   }
  render() {
    return (
      <div>
        <p>swiper组件的使用</p>
        <WendySwiper>
          {this.state.list.map((item, index) => {
            return <WendySwiperItem key={index}>{item}</WendySwiperItem>
          })}
        </WendySwiper>
      </div>
    )
  }
}
