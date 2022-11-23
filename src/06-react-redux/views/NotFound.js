import React, { useEffect } from 'react'
function NotFound (props) {
  useEffect(() => {
    console.log(props)
  }, [props])
  return (
    <div>NotFound</div>
  )
}

function wendyConnect(cb) {
  var valueProps = cb();
  return (MyComponent) => {
    return (props) => {
      return <div style={{color: 'red'}}>
      <MyComponent {...valueProps} {...props} /> 
    </div>
    }
  }
}

export default wendyConnect(() => {
  return {
    a:0,
    b:0
  }
})(NotFound);

// export default NotFound;