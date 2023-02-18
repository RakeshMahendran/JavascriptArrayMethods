import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Average from './Average'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Average/>
    </div>
  )
}

export default App
