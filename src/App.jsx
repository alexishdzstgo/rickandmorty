import { useState } from 'react'
import './App.css'
import Location from './components/Location'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Location />
    </div>
  )
}

export default App
