import React, { useEffect } from "react";
import store from "../mobx/store";

export default function Detail(props) {
  //   console.log('路由传参一/三：路由传参location.query的形式', props.location);
  console.log("路由传参二：获取到传递过来的id：", props.match.params.myid);
  useEffect(() => {
    store.show = false;
    return () => {
      store.show = true;
    }
  }, [])
  return <div>detail</div>;
}
