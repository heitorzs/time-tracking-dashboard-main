import React from 'react'

function TimeBox({children, time}) {
  return (
    <>
        {console.log(children.img)}
        <img src={children.img} alt='time' />
        <div>{children.title}</div>
    
    </>
  )
}

export default TimeBox