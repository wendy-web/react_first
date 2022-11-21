import React, { useState } from 'react'

export default function App() {
    const [nameVale, setNameVale] = useState('wendy');
    const [ageVale, setAgeVale] = useState(10);
  return (
    <div>
        <p>React hooks的使用</p>
        <button onClick={() => {
            setNameVale('温蒂');
            setAgeVale(23)
        }}>click</button>
        useState：{nameVale} - {ageVale}
    </div>
  )
}
