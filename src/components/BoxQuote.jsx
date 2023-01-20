import React from 'react'
import ButtonBox from './ButtonBox'


const BoxQuote = ({ramdonQuote,colorRamdon,ClickHand}) => {

  return (
    <section className='box' style={{ color: colorRamdon}}>
      <p className='box__author'>{ramdonQuote.quote}</p>
      <h1 className='quote__box'>{ramdonQuote.author}</h1>
      <ButtonBox 
      ClickHand={ClickHand}
      colorRamdon={colorRamdon}
      />
     
    </section>
  )
}

export default BoxQuote