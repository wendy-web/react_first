import axios from "axios";
import React, { useState, useEffect } from "react";

export default function App() {
  const [ nameValue, setNameValue] = useState('wendy')
  // useEffect中的第二个参数为空数组，相当于componentDidMount的钩子
  useEffect(() => {
    setNameValue(nameValue.substring(0,1).toUpperCase() + nameValue.substring(1));
  }, [nameValue]);
//   第一次执行一次，之后name更新也会执行
  return (
    <div>
      <p>useEffect</p>
      {nameValue}
      <button onClick={() => {
        setNameValue('kerwin')
      }}>onClick</button>
    </div>
  );
}
