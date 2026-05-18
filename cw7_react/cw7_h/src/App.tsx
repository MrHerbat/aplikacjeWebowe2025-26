import { useEffect, useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'

function App() {
  const [info,setInfo] = useState("");
  const focus = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    if(focus.current){
      focus.current.focus();
    }
  },[]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [stop, setStop] = useState(true);
  const [timer, setTimer] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    },1000);
    return () => clearInterval(interval);
  },[]);
  useEffect(()=>{
    let interval = null;
      if(!stop){
        interval = setInterval(()=>{
          setTimer(prev=>prev+10);
        },10);
      }else{
        clearInterval(interval);
      }
      return () => clearInterval(interval);
  },[stop])
  return (
    <>
      <h1 className='text-center'>Hello World of useEffects!</h1>
      <section className='border border-secondary rounded p-3 text-center'>
        <h2>Zegarek</h2>
        <section className='text-center' style={{
        fontSize: "3rem",
        fontWeight: "bold",
        color:"blue"
      }}>{time}</section>
      </section>
      <section className='border border-secondary rounded p-3 text-center'>
        <h2>Stoper</h2>
        <section className='text-center' style={{
        fontSize: "3rem",
        fontWeight: "bold",
        color:"blue"
      }}>
        <div>
          <span>{("0"+Math.floor(timer/60000)%60).slice(-2)}:</span>
          <span>{("0"+Math.floor(timer/1000)%60).slice(-2)}:</span>
          <span>{("0"+(timer/10)%1000).slice(-2)}</span>  
        </div>
        <button type="button" className='btn btn-primary'
        onClick={()=>{
          setStop(false);
        }}>Start</button>
        <button type="button" className='btn btn-secondary mx-2'
        onClick={()=>{
          setStop(true);
        }}>Stop</button>
        <button type="button" className='btn btn-primary'
        onClick={()=>{
          setStop(true);
          setTimer(0);
        }}>Reset</button>
        </section>
      </section>
      
        <section>
          <input ref={focus} type="text" onChange={(e)=>setInfo(e.target.value)} value={info}/>
          <span>{info}</span>
        </section>
    </>
  )
}

export default App
