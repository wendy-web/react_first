import React, { useRef, useState } from "react";

export default function App() {
  const [list, setList] = useState(["wendy", "keay"]);

  // 相当于React.creatRef();的创建
  const mytextRef = useRef();

  const delHandle = (index) => {
    const newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist)
  }
  const addHandle = () => {
    console.log(mytextRef.current.value)
    setList([...list, mytextRef.current.value]);
    mytextRef.current.value = ''
  }
  return (
    <div>
      <p>hooks使用 - todolist</p>
      <input type='text' ref={mytextRef}/>
      <button onClick={() => { addHandle()}}>
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
