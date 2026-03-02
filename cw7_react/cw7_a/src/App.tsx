import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Component1 from './components/Component1'
import MyInfo from './components/MyInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Heloł to Vite + React!</h1>
      <p>Akapit a App.tsx</p>
      <hr />
      <Component1 />
      <MyInfo myColor='green' content='ala ma kota'/>
      <MyInfo myColor='blue' content='ala ma psa' myOpacity={0.25}/>
      <ul>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
      </ul>
    </>
  )
}

export default App
