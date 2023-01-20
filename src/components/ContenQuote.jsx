import React from 'react'

const ContenQuote = ({ramdonQuote}) => {
  return (
    <>
    <p className='box__author'>{ramdonQuote.quote}</p>
    <h1 className='quote__box'>{ramdonQuote.author}</h1>
    </>
  )
}

export default ContenQuote


