import React, {useContext, useReducer} from 'react';
// 处理函数
const reducer = (prevState, actions) => {
    let newstate = {...prevState};
    switch(actions.type) {
        case 'changeA':
            newstate.a = actions.value;
            return newstate
        case 'changeB':
            newstate.b = actions.value;
            return newstate;
        default:
            return prevState;
    }
}

// 初始化的状态
const intialState = {
    a: 'aaa',
    b: 'bbbb'
}
const GlobalContext = React.createContext();
export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState);
    return (
        <GlobalContext.Provider value={
            {
                state,
                dispatch
            }
        }>
            <div>
                <p>reducer的使用</p>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
      </GlobalContext.Provider>
    )
  }
function Child1() {
    const {dispatch} = useContext(GlobalContext);
    return <div>
        child1 --- 
        <button onClick={() => {
            dispatch({
                type: 'changeA',
                value: 'AAAA'
            })
        }}>改变child2中的a值：</button>
        <button onClick={() => {
            dispatch({
                type: 'changeB',
                value: 'BBB'
            })
        }}>改变child3中的b值：</button>
        <hr />
    </div>
}
function Child2() {
    const {state} = useContext(GlobalContext);
    return <div>
        child2 --- {state.a}
    </div>
}
function Child3() {
    const {state} = useContext(GlobalContext);
    return <div>
        child3 --- {state.b}
    </div>
}


