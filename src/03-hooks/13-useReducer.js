import React, { useReducer } from 'react';

// c处理函数
const reducer = (prevState, actions) => {
    let newstate = {...prevState};
    switch(actions.type) {
        case 'minus':
            newstate.count--;
            return newstate
        case 'add':
            newstate.count++;
            return newstate;
        default:
            return prevState;
    }
}

// 初始化的状态
const intialState = {
    count: 0
}
export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
        <p>useReducer的使用</p>
        <button onClick={() => {
            dispatch({
                type: 'minus'
            });
        }}>--</button>
        {state.count}
        <button onClick={() => {
            dispatch({
                type: 'add'
            });
        }}>++</button>
    </div>
  )
}