import React from 'react'

const BigButtom = ({ClickHand,colorRamdon}) => {
  return (
   
        <button className='shadow__btn' style={{ background: colorRamdon}}  onClick={ClickHand}>change color</button>
   
  )
}

export default BigButtom