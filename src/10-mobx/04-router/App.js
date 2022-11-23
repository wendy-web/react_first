import React, { Component } from "react";
import MRouter from "./router/indexRouter";
import Tabbar from "./components/Tabbar";
import "./App.css";
import { inject, observer } from "mobx-react";
// 引用到组件注入 - 装饰成高阶组件
@inject('store')
@observer
class App extends Component {
  componentDidMount() {
    console.log(this.props.store,'----')
    // 监听mobx的
  }
  render() {
    return (
      <div>
        <p>router - 路由的展示</p>
        <MRouter>
          {this.props.store.show && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    );
  }
}
export default App;