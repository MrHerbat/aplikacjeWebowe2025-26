import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

const kursy = ["Programowanie w C#", "Angular dla początkujących","Kurs Django"];
var imie = "";
var kurs = "";


function App() {
  return (
    <>
      <main className='container'>
        <h2>Liczba kursów: {kursy.length}</h2>
        <ol>
          {kursy.map((elem,index)=>(
            <li key={index}>{elem}</li>
          ))}
        </ol>

        <form>
          <label htmlFor="imie">Imię i nazwisko:</label>
          <input type="text" name="imie" id="imie" className='row m-2 w-75 p-1 form-control'/>
          <label htmlFor="kurs">Kursy:</label>
          <select name="kurs" id="kurs"  className='row m-2 w-75 p-1 form-control'>
            <option value={"base"} selected>Wybierz kurs</option>
            {kursy.map((elem,index)=>(
            <option value={index}>{elem}</option>
          ))}
          </select><br />

          <button className="btn btn-primary" onClick={(e)=>{
            result();
          }} type='button'>Zapisz do kursu</button>
        </form>
        <span id='result'></span>
      </main>
    </>
  )
}
function result() {
  const select = document.getElementById("kurs") as HTMLSelectElement;
  const name = document.getElementById("imie") as HTMLSelectElement;
  const el = document.getElementById("result") as HTMLSelectElement ;
  const selectedValue = select.value;
  if(selectedValue!="base"){
    imie = name.value;
    kurs = select.options[select.selectedIndex].text;;
    if(imie!="")
    {
      el.innerText = `${imie} zapisano do kursu ${kurs}`;
    }else{
      el.innerText = "Nie podano imienia"
    }
  }else{
    el.innerText = "Nie wybrano żadnego kursu"
  }
  
}
export default App
