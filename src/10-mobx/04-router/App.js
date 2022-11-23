import React, { Component } from "react";
import MRouter from "./router/indexRouter";
import Tabbar from "./components/Tabbar";
import "./App.css";
import { autorun } from "mobx";
import store from "./mobx/store";

export default class App extends Component {
  state = {
    isShow: false
  }
  componentDidMount() {
    // 监听mobx的
    autorun(() => {
      this.setState({
        isShow: store.show
      })
    })
  }
  render() {
    return (
      <div>
        <p>router - 路由的展示</p>
        <MRouter>
          {this.state.isShow && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    );
  }
}
