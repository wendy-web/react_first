import React, { Component } from 'react';
import axios from 'axios';

export default class cinema extends Component {
  
  render() {
    // 访问电影的接口
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=6210197',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16687675555277788957310977","bc":"440300"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then( res => {
      console.log(res.data);
    })
    return (
      <div>cinema</div>
    )
  }
}
