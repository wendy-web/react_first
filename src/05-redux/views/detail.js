import React, { useEffect } from "react";
import { hide, show } from "../redux/actionCreator.js/TabbarActionCreator";
import store from "../redux/store";

export default function Detail(props) {
  useEffect(() => {
    console.log('creat detail');
    store.dispatch(hide());
    return () => {
      console.log('destroy detail');
      store.dispatch(show())
    }
  }, []);
  return <div>detail</div>;
}
