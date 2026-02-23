import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, abhay] = useState(0);

  const increase = () => {
    console.log("increase", count);
    abhay(++count);
  }

  const decrease = () => {
    if(count <= 0) return;
    abhay(count - 1);
  }

  return (
    <>
      <h1>Welcome Friends!</h1>
      
      <p>Count : {count}</p>

      <button onClick={increase}>Increase</button>
      <br /><br />
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
