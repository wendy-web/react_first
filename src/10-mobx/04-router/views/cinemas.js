import { autorun } from 'mobx';
import { Observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import store from '../mobx/store';
function Cinemas(props) {
  // const [list, setlist] = useState([]);
  useEffect(() => {
    if(store.list.length === 0) {
      store.getList();
    }
    // 监听list的更改
    // const unsubscribe = autorun(() => {
    //   console.log(store.list);
    //   setlist(store.list)
    // });
    return() => {
      // 销毁时取消订阅
      // unsubscribe();
    }
  }, [])
  return (
    <div>
      <div>
        <p onClick={() => {
          props.history.push('city');
        }}>点击进入cinemas的城市：{store.cityName}</p>
        <button onClick={() => {
          props.history.push('/cinemas/search')
        }}>搜索</button>
      </div>
      <hr />
      <ul>
        <Observer>
          {
            () => {
              return store.list.map((item) => {
                return <li key={item.cinemaId}>{item.cinemaId}-{item.name}</li>
              })
            }
          }
        </Observer>
      </ul>
    </div>
  )
}
export default Cinemas;