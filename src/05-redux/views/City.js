import React, { useState } from 'react'
import store from '../redux/store'

export default function City(props) {
    const [list] = useState(['北京', '深圳', '上海'])
  return (
    <div>
        <p>City组件列表 - 选择城市</p>
        <ul>
            {list.map((item, index) => {
                return <li key={index} onClick={() => {
                    store.dispatch({
                        type: 'change_city',
                        payload: item
                    });
                    // props.history.push('/cinemas');
                    // 返回上一级
                    props.history.goBack();
                }}>
                    {item}
                </li>
            }
            )}
        </ul>
    </div>
  )
}
