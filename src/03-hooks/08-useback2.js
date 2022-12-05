import React, { useState, useCallback } from "react";

export default function App() {
  const [list, setList] = useState(["wendy", "keay"]);
  const [inputValue, setInputValue] = useState("");
  // 防止因为组件重新渲染，导致方法被重新创建，起到缓存的作用，只有第二个参数变化了，错重新声明一次
  // useCallback会被记忆起来，不会再次被赋值
  const inputHandle = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  // 数组的参数是表示依赖，记录相关元素的的更改
  const addHandle = useCallback(() => {
    setList([...list, inputValue]);
    setInputValue("");
  },
  [inputValue, list]);

  const delHandle = useCallback((index) => {
    const newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist);
  },
  [list]);
  return (
    <div>
      <p>hooks使用 - todolist</p>
      <input
        value={inputValue}
        onChange={(event) => inputHandle(event)}
      />
      <button onClick={() => {addHandle()}}>
        add
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} --
            <button onClick={() => {
                delHandle(index)
            }}>delect</button>
          </li>
        ))}
      </ul>
      { list.length<=0 && <div>暂无待办事项</div>}
    </div>
  );
}
