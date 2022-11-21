import React, { Component } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination]);

export default class WendySwiper extends Component {
    componentDidUpdate() {
    new Swiper(".swiper", {
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  render() {
    return (
      <div>
        <p>swiper同步</p>
        <div
          className="swiper"
          style={{ height: "200px", background: "yellow" }}
        >
          <div className="swiper-wrapper">{this.props.children}</div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    );
  }
}
