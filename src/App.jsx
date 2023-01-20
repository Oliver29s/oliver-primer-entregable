import quote from './Json/quote.json'
import './App.css'
import BoxQuote from './components/BoxQuote';
import { useState } from 'react';

function App() {
  
const arrayRamdon = (array) =>{
 const arrayIndex = Math.floor(array.length * Math.random()); 
 return array[arrayIndex]
}
const [ramdonQuote, setramdonQuote] = useState(arrayRamdon(quote))

const ClickHand = () =>{
  setramdonQuote(arrayRamdon(quote))
}

  return (
    <div className="App">
      <BoxQuote 
      ramdonQuote={ramdonQuote}
      ClickHand={ClickHand}

      />
   
    </div>
  )
}

export default App
