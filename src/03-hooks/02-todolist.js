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
