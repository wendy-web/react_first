/*
 * @Author: wendy 463710868@qq.com
 * @Date: 2022-11-21 15:35:13
 * @LastEditors: wendy 463710868@qq.com
 * @LastEditTime: 2022-11-21 16:00:24
 * @FilePath: /react_first_wendy/src/03-hooks/02-todolist.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState(["wendy", "keay"]);
  const [inputValue, setInputValue] = useState("");
  const delHandle = (index) => {
    const newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist)
  }
  return (
    <div>
      <p>hooks使用 - todolist</p>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setList([...list, inputValue]);
          setInputValue("");
        }}
      >
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
