import React, { useEffect, useState, useMemo} from 'react';
import axios from 'axios';

export default function App() {
    const [cinemaList, setcinemaList] = useState([]);
    const [inputValue, setinputValue] = useState('');

    useEffect(() => {
        // 访问电影的接口
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7381130',
            method: 'get',
            headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16687675555277788957310977","bc":"440300"}',
            'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then( res => {
            console.log(res.data.data.cinemas);
            setcinemaList(res.data.data.cinemas);
        });
    }, []);

    // 类似于计算属性 - 数组中的参数未更改，return的结果可直接使用
    const getCinemaLiset = useMemo(() => {
        return cinemaList.filter(item => item.name.toUpperCase().includes(inputValue) || item.address.toUpperCase().includes(inputValue));
    }, [inputValue, cinemaList]);

    return (
        <div>
          <input
            placeholder='输入搜索的内容'
            type='text'
            className='input_box'
            value={inputValue}
            onChange={(event) =>  setinputValue(event.target.value)}
          />
          <hr />
          {
            getCinemaLiset.map((item) =>
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