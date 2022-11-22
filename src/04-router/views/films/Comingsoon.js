import axios from 'axios'
import React, { Component } from 'react'

export default class Comingsoon extends Component {
  componentDidMount() {
    axios({
      url:'/ajax/comingList?ci=20&limit=10&movieIds=&token=&optimus_uuid=FE48D2B06A4011ED9202F7A3C5B5021BCB9007CDE21F4A9186EB5F38DFE936F6&optimus_risk_level=71&optimus_code=10'
    }).then((res) => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>Comingsoon</div>
    )
  }
}
