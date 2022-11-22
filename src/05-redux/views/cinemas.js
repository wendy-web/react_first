import React, { useEffect, useState } from 'react'
import store from '../redux/store';
import getCnimaListAction from '../redux/actionCreator.js/getCnimaListAction';
export default function Cinemas(props) {
  const [list, setlist] = useState(store.getState().CinemaListReducer.list);
  const [cityName] =  useState(store.getState().CityReducer.cityName);
  useEffect(() => {
    if(store.getState().CinemaListReducer.list.length === 0) {
      // 后台访问s
      // actionCreator里面写异步
      store.dispatch(getCnimaListAction());
    } else {
      console.log('缓存数据')
    }
    // 订阅
    const unSubscribe = store.subscribe(() => {
      // console.log(store.getState().CinemaListReducer.list, '0000=');
      setlist(store.getState().CinemaListReducer.list)
    });
    return () => {
      // 组件的销毁 - 取消订阅
      unSubscribe();
    }
  }, [])
  return (
    <div>
      <p onClick={() => {
        props.history.push('city');
      }}>点击进入cinemas的城市：{cityName}</p>
      <hr />
      <ul>
        {list.map((item) => {
          return <li key={item.cinemaId}>{item.cinemaId}-{item.name}</li>
        })}
      </ul>
    </div>
  )
}

