import quote from './Json/quote.json'
import './App.css'
import BoxQuote from './components/BoxQuote';
import { useState } from 'react';
import color from './Json/color.json'
import ButtonBox from './components/ButtonBox';

function App() {
  
const arrayRamdon = (array) =>{
 const arrayIndex = Math.floor(array.length * Math.random()); 
 return array[arrayIndex]
}
const [ramdonQuote, setramdonQuote] = useState(arrayRamdon(quote))

const [colorRamdon, setColorRamdon] = useState(arrayRamdon(color))

const ClickHand = () =>{
  setramdonQuote(arrayRamdon(quote))
  setColorRamdon(arrayRamdon(color))
}

 

  return (
    <div className="App" style={{ background: colorRamdon}} >
      <BoxQuote 
      ramdonQuote={ramdonQuote}
      ClickHand={ClickHand}
      colorRamdon={colorRamdon}
      />
     
   
    </div>
  )
}

export default App
