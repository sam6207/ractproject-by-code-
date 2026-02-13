import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter] = useState(15)

//let counter = 15

const addvalue = () => {
  console.log("clicked",counter);
  //counter = counter + 1
  setCounter(counter + 1 )
}

const removeValue = () => {
  setCounter(counter - 1 )
}

  return (
    <>
      <h1>hello my project</h1>
      <h2>Counter value: {counter} </h2>

      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue} 
      >Remove value</button>
      <p>footer:  {counter} </p>
    </>
  )
}

export default App
