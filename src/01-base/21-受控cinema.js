import React, { Component } from 'react';
import axios from 'axios';
import './css/cinema.css';

export default class cinema extends Component {
  constructor() {
    super();
    // state更改，render会更改
    this.state = {
      cinemaList: [],
      inputValue: ''
    }
    // 访问电影的接口
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=6210197',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16687675555277788957310977","bc":"440300"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then( res => {
      console.log(res.data.data.cinemas);
      this.setState({
        cinemaList: res.data.data.cinemas
      });
    });
  }
  getCinemaLiset() {
    return this.state.cinemaList.filter(item => {
        return item.name.toUpperCase().includes(this.state.inputValue) || item.address.toUpperCase().includes(this.state.inputValue)
      });
  }
  render() {
    return (
      <div>
        <input
          placeholder='输入搜索的内容'
          type='text'
          className='input_box'
          value={this.state.inputValue}
          onChange={(event) => {
            this.setState({
                inputValue: event.target.value
            })
          }}
        />
        <hr />
        {
          this.getCinemaLiset().map((item) =>
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dt>{item.address}</dt>
              <hr />
            </dl>
          )
        }
      </div>
    )
  }
}
