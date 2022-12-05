import React, { Component, Suspense } from "react";
// 使用懒加载的形式引用
const Nowplaying = React.lazy(() => import('./components/Nowplaying'));
const Comingsoon = React.lazy(() => import('./components/Comingsoon'));
export default class App extends Component {
  state = {
    type: 1,
  };
  render() {
    return (
      <div>
        <p>懒加载</p>
        <button onClick={() => {
            this.setState({
                type: 1
            })
        }}>正在热映</button>
        <button onClick={() => {
            this.setState({
                type: 2
            })
        }}>即将上映</button>
        <Suspense fallback={<div>正在加载....</div>}>
            {
                this.state.type === 1 ? <Nowplaying></Nowplaying> : <Comingsoon></Comingsoon>
            }
        </Suspense>
      </div>
    );
  }
}