import React from 'react'
import ButtonBox from './ButtonBox'
import ContenQuote from './ContenQuote'



const BoxQuote = ({ramdonQuote,colorRamdon,ClickHand}) => {

  return (
    <section className='box' style={{ color: colorRamdon}}>
     <ContenQuote ramdonQuote={ramdonQuote} />
      <ButtonBox 
      ClickHand={ClickHand}
      colorRamdon={colorRamdon}
      />
     
    </section>
  )
}

export default BoxQuote