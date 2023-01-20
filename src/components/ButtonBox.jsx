import React from 'react'

const ButtonBox = ({ClickHand,colorRamdon}) => {
  return (
    <button style={{ background: colorRamdon}} className='box__buttom' 
    onClick={ClickHand}>{'>'}</button>

  )
}

export default ButtonBox