import React from 'react';

export default function center(props) {
  return (
    <div>
      center
      <button onClick={() =>{
        // 拿到router传递过来的方法
        console.log(props)
      }}>go to Cinemas</button>
    </div>
  )
}
