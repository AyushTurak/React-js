import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(5)

// let counter =5 ;

const addValue =() => {
  counter = counter +1
  setCounter(counter)
console.log("value Added" ,Math.random())} ;


  return (   
  <>
  <h1>Heyy there</h1>
  <h2>Counter value {counter} </h2>
  <br />
  <button onClick={addValue}>Add value </button>
  <br />
  <button>Remove Value</button>
  </>  
  )
}


export default App
