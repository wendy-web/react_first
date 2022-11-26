import React, { Component } from "react";
import { createPortal } from "react-dom";
import style from '../css/Dialog.module.css';
// createPortal传送到body外使用
export default class Dialog extends Component {
  render() {
    return createPortal(<div className={style.dialog}>
      <div className={style.content}>
        <p>Dialog的展示内容</p>
        <button onClick={()=> {
          this.props.onClose();
        }}>关闭dialog</button>
      </div>
    </div>, document.body);
  }
}
