import { useState } from 'react'
import Circle from './components/Circle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Circle color='red'/>
      <Circle />
    </>
  )
}

export default App
