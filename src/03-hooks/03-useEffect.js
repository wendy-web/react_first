import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function App() {
    const [ list, setList ] = useState([]);
    // useEffect中的第二个参数为空数组，相当于componentDidMount的钩子
    useEffect(() => {
        axios.get('/list.json').then(res => {
            setList(res.data.data)
        })
    }, []); // 传递空数组
  return (
    <div>
        <p>useEffect</p>
        <ul>
            {list.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
  )
}
