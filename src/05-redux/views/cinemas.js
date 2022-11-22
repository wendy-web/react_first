import React, { useState } from 'react'
import store from '../redux/store'

export default function Cinemas(props) {
  const [cityName] =  useState(store.getState().CityReducer.cityName)
  return (
    <div>
      <p onClick={() => {
        props.history.push('city');
      }}>点击进入cinemas的城市：{cityName}</p>
    </div>
  )
}

