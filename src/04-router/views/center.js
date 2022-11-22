import React from 'react';
import { withRouter } from 'react-router-dom';

function center(props) {
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

export default withRouter(center)
