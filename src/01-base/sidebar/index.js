import React from 'react'

export default function Sidebar(props) {
    const { bgClor } = props
  return (
    <div>
        Sidebar - 
        <p style={{background: bgClor }}>props传递过来的值</p>
    </div>
  )
}
