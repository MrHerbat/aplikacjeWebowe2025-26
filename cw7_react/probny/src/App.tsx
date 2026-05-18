import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  var pictures = [
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}]

    var i = 1;

    function increaseDownloads(id:number) {
      const downloads = document.getElementById("downloads"+id) as HTMLSelectElement;
      pictures[id].downloads+=1;
      downloads.innerText="Pobrań: "+pictures[id].downloads;
    }

  return (
    <>
      <h1>Kategorie zdjęć</h1>
      
      <section className='d-flex p-2'>
        <div className='form-check form-switch'>
          <input type="checkbox" id="kwiaty" className='form-check-input' defaultChecked/>
          <label htmlFor="kwiaty" className='form-check-label'>Kwiaty</label>
        </div>
        <div className='form-check form-switch'>
          <input type="checkbox" id="zwierzeta" className='form-check-input' defaultChecked/>
          <label htmlFor="zwierzeta" className='form-check-label'>Zwierzęta</label>
        </div>
        <div className='form-check form-switch'>
          <input type="checkbox" id="samochody" className='form-check-input' defaultChecked/>
          <label htmlFor="samochody" className='form-check-label'>Samochody</label>
        </div>
      </section>
      <section>
        {pictures.map((elem,index)=>(
            <div style={{"width":"33%", "display":"inline-block"}}>
              <img src={elem.filename} alt={elem.alt} style={{"borderRadius":"5px","margin":"5px"}}/>
              <h4 id={'downloads'+elem.id}>Pobrań: {elem.downloads}</h4>
              <button type="button" className='btn btn-success' onClick={(e)=>increaseDownloads(elem.id)}>Pobierz</button>
            </div>
        ))}
      </section>
    </>
  )
}


export default App