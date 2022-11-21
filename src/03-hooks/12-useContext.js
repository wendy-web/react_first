import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react';

const GlobalContext = React.createContext();
function Item(props) {
    // 引用的useContext的使用； 是定义的对象GlobalContext
    const value = useContext(GlobalContext);
    return (
        <div style={{background: 'pink'}} onClick={
            () => {
                console.log(props.detail);
                value.changeInfo(props.detail);
            }
        }>
            <p>{props.id} -- {props.name}</p>
            <p>点击查看detail：</p>
        </div>
    );
}

function ItemDetail() {
    // 引用的useContext的使用
    const value = useContext(GlobalContext);
    return (
        <div style={{background: 'gray'}}>
            <p>点击展示的内容：{value.info}</p>
        </div>
    )
}
export default function App() {
    const [filmList, setfilmList] = useState([]);
    const [info, setinfo] = useState([]);
    useEffect(() => {
        axios.get('/list.json').then((res) => {
            console.log(res.data.data);
            setfilmList(res.data.data);
        });
    }, [])
    return (
        <GlobalContext.Provider value={
          {
            info: info,
            changeInfo: (value) => {
              console.log('0000', value);
              setinfo(value);
            }
          }
        }>
          <div>
            <p>父组件拿到自组件中点击的detail内容：</p>
            <p>中间人模式 --- 数据列表</p>
            {filmList.map((item) =>
                <Item key={item.id} {...item}></Item>
            )}
            <ItemDetail></ItemDetail>
          </div>
        </GlobalContext.Provider>
      )
}

