import React, { useRef, useState } from "react";

export default function App() {

  const [count, setCount] = useState(0);
  let myCount = useRef(0);
  return (
    <div>
      <p>useball的使用</p>
      <button
        onClick={() => {
          setCount(count + 1);
          myCount.current++;
        }}
      >
        add++
      </button>
      <p>useState定义的count，具有记忆函数，会记住状态{count}</p>
      <p>普通变量赋值的函数会被清理，不具有记忆的状态：{myCount.current}</p>
    </div>
  );
}
