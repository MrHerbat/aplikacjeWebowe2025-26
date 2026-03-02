import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Rectangle from './component/Rectangle'
import SomeText from './component/SomeText'
import Circle from './component/Circle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rectangle myWidth={50} myHeight={120} myColor='blue'/>
      <Rectangle myWidth={120} myHeight={100} myColor='red'/>
      <SomeText content='Coś tam coś tam'/>
      <SomeText content='Coś tam coś tam 2.0' fontColor='green'/>
    </>
  )
}

export default App
