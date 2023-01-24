import React from 'react'

const BigButtom = ({ClickHand,colorRamdon}) => {
  return (
    <div >
        <button className='shadow__btn' style={{ background: colorRamdon}}  onClick={ClickHand}>change color</button>
    </div>
  )
}

export default BigButtom