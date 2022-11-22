import React, { Component } from "react";
import MRouter from "./router/indexRouter";
import Tabbar from "./components/Tabbar";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <p>router - 路由的展示</p>
        <MRouter>
          <Tabbar></Tabbar>
        </MRouter>
      </div>
    );
  }
}
