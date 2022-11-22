import React from 'react'
import { useHistory } from 'react-router-dom';


export default function Login(props) {
  const routerHistory = useHistory();
  return (
    <div>
        <p>login - 登录的界面</p>
        <input type='text' />
        <button onClick={() => {
            localStorage.setItem('token', 'wendy');
            routerHistory.push('center');

            // 直接render的渲染，所以不具备有
            // props.history.push('/Center');
        }}>login</button>
    </div>
  )
}
