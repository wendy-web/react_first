import React, { Component } from 'react';
import axios from 'axios';
import '../css/cinema.css';

export default class cinema extends Component {
  constructor() {
    super();
    this.state = {
      cinemaList: [],
      searchList: []
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
        cinemaList: res.data.data.cinemas,
        searchList: res.data.data.cinemas
      });
    });
  }
  inputChangeHandle = (event) => {
    console.log(event.target.value);
    // 进行搜索过滤
    const searchList = this.state.cinemaList.filter(item => {
      return item.name.toUpperCase().includes(event.target.value) || item.address.toUpperCase().includes(event.target.value)
    });
    this.setState({
      searchList
    })
    console.log(searchList);
  }
  render() {
    
    return (
      <div>
        <input
          placeholder='输入搜索的内容'
          type='text'
          onChange={this.inputChangeHandle}
          className='input_box'
        />
        <hr />
        {
          this.state.searchList.map((item) => 
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
