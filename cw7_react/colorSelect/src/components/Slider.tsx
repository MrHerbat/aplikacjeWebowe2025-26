import { useState } from "react";

type Props = {
    name: string,
    maxValue: number,
    onChange: (value:number) => void,
} 

const Slider  = (props: Props) => {
  const [value, setValue] = useState(255)
  return (
    <div className="d-block">
      <label htmlFor={props.name} style={{width:"10%"}}>{props.name}</label>
      <input type="range" defaultValue={props.maxValue} max={props.maxValue} min={0} id={props.name} name={props.name} 
              step={1} onChange={(e)=>{setValue(parseInt(e.target.value));props.onChange(parseInt(e.target.value))}}
              style={{width:"80%"}}/>
      <label htmlFor={props.name} style={{width:"10%"}}>{value}</label>
    </div>
  )
}


export default Slider;