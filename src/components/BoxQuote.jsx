import React from 'react'

const BoxQuote = ({ramdonQuote,ClickHand}) => {
  return (
    <section>
      <p>{ramdonQuote.quote}</p>
      <h1>{ramdonQuote.author}</h1>
      <button onClick={ClickHand}>{'>'}</button>
    </section>
  )
}

export default BoxQuote