import React from "react";

export default function detail(props) {
//   console.log('路由传参一/三：路由传参location.query的形式', props.location);
    console.log('路由传参二：获取到传递过来的id：', props.match.params.myid);
  return <div>detail</div>;
}
