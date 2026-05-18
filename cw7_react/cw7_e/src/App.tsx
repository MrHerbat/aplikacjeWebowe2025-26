import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import SelectElems from './components/SelectElement'
import { colors } from './data/colors'
import { sizes } from './data/sizes'
import { useState } from 'react'

function App() {
  const [selectedColor, setTextColor] = useState("black");
  const [selectedSize, setSize] = useState("12px")
  
  return (
    <>
      <div className='d-flex gap-3'>
        <div>
          <SelectElems label='Kolor tekstu' options={colors} onChange={(value) => setTextColor(value)}/>
        </div>
        <div>
          <SelectElems label='Rozmiar tekstu' options={sizes} onChange={(value) => setSize(value)}/>
        </div>
      </div>
      <p style={{
        fontSize: selectedSize,
        color: selectedColor,
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores optio nobis ratione? Consectetur officiis aliquid eveniet dolorum natus inventore ut ad iste, nisi voluptatem sed? Esse, assumenda? Molestias, nihil aliquam.
      </p>
    </>
  )
}

export default App