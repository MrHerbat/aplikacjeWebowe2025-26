import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)
  const [rValue, setRValue] = useState(255)
  const [gValue, setGValue] = useState(255)
  const [bValue, setBValue] = useState(255)
  const [bgColor, setBgColor] = useState("rgb(255,255,255)");


  return (
    <>
    <div className='d-block' style={{backgroundColor: bgColor, height: "50px"}}></div>
      <Slider name="R" maxValue={255} onChange={(value) => {setRValue(value); setBgColor("rgb("+rValue+','+gValue+','+bValue+")")}}/>
      <Slider name="G" maxValue={255} onChange={(value) => {setGValue(value); setBgColor("rgb("+rValue+','+gValue+','+bValue+")")}}/>
      <Slider name="B" maxValue={255} onChange={(value) => {setBValue(value); setBgColor("rgb("+rValue+','+gValue+','+bValue+")")}}/>
      <div className='color' >
        {rValue}, {gValue}, {bValue}
      </div>
    </>
  )
}

export default App
