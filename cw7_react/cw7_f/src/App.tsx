import { useState } from 'react'
import type { SubmitEvent } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./components/CompWithChild"
import FormRef from "./components/FormRef"
import {type Movie, genres, movies, getLatestMovieId} from './data'

function App() {
  const [movieList,setMovieList] = useState<Movie[]>(movies)
  var lp = 1;
  function handleSubmit(e:SubmitEvent<HTMLFormElement>):void {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          console.log(formData);
          const title = formData.get("title") as string;
          const director = formData.get("director") as string;
          const releaseYear = Number(formData.get("year"));
          const genre = formData.get("title") as Movie["genre"];
          const newMovie: Movie = {
            id: getLatestMovieId(movieList)+1,
            title,
            director,
            releaseYear,
            genre
          };
          setMovieList([...movieList, newMovie]);
          form.reset();
      }
      function handleDelete(movie: Movie): void {
        const newMovieList = movieList.filter(m=>m.id !== movie.id);
        setMovieList(newMovieList);
      }

  return (
    <>
    <h1 className='text-center mb-2'>Przegląd filmów</h1>
    <main className='d-flex gap-2'>
      <section className='w-50'>
        <h2>Formularz</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className='mb-3'>
            <input type="text" name="title" placeholder='Tytuł filmu' className='form-control' required/>
          </div>
          <div className='mb-3'>
            <input type="text" name="director" placeholder='Reżyser filmu' className='form-control' required/>
          </div>
          <div className='mb-3'>
            <input type="text" name="year" placeholder='Rok premiery' className='form-control' required/>
          </div>
          <div className='mb-3'>
            <select name="genre" className='form-select'>
              {genres.map((genre)=>(
                <option value={genre} key={genre}>{genre}</option>
              ))}
            </select>
          </div>
          <div className='mb-3'>
            <button type="submit" className='btn btn-primary col-2'>Zapisz</button>
          </div>
        </form>
      </section>
      <section className='w-50'>
        <h2>Ilość filmów na liście - {movieList.length}</h2>
        <table className='table table-success m-2'>
          <thead>
            <tr>
              <th>Lp.</th>
              <th>Tytuł</th>
              <th>Reżyser</th>
              <th>Rok premiery</th>
              <th>Gatunek</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {movieList.map((movie)=>(
              <tr key={movie.id}>
                <td>{lp++}</td>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.releaseYear}</td>
                <td>{movie.genre}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
      
    </>
  )
}


export default App
