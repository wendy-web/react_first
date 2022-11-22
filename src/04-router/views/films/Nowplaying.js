import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Nowplaying(props) {
  const [list, setlist] = useState([]);
  useEffect(() => {
    // 访问电影的接口
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3293746',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16687675555277788957310977","bc":"440300"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      // console.log(res);
      setlist(res.data.data.cinemas)
    })
  }, []);
  const routerHistory = useHistory();
  const changPageHandle = (id) => {
    // 通过hash的更改跳转
    // window.location.href = '#/detail' + id;

    // 该组件是路由组件，props中存在router中组件包裹的方法；具备history的更改方法
    // props.history.push(`/detail/${id}`);
    // 路由传参一： query传参
    // props.history.push({
    //   pathname: '/detail',
    //   query: {
    //     id: id
    //   }
    // })
    // 路由传参二：动态路由
    // router提供useHistory的方法
    routerHistory.push(`/detail/${id}`);

    // 路由传参三： state传参
    // props.history.push({
    //   pathname: '/detail',
    //   state: {
    //     myid: id
    //   }
    // })
  }
  return (
    <div>
      <p>Nowplaying</p>
      {list.map((item) => {
        return <li key={item.cinemaId} onClick={() => {
          changPageHandle(item.cinemaId);
        }}>
          {item.name}
        </li>
      })}
    </div>
  )
}
