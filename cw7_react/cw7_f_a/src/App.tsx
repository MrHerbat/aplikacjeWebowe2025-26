import { useRef, useState } from 'react'
import type { SubmitEvent } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import {type Book, books, genres, getLatesBookId} from "./data"

function App() {
  const [bookList, setBookList] = useState<Book[]>(books);
  const [rating, setRating] = useState(0);

  const [editingBookId, setEditingBookId] = useState<number | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const publishDateRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [info, setInfo] = useState<string>("Edytuj książkę");
  var lp = 1;
  
  function handleSubmit(e: SubmitEvent<HTMLFormElement>): void {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const publishYear = parseInt(formData.get("year") as string);
    const genre = formData.get("genre") as Book["genre"];
    if (editingBookId !== null) {
      const updatedBook: Book = {
        id: editingBookId,
        title,
        author,
        publishYear,
        rating,
        genre,
      };
      const newBookList = bookList.map((b) => (b.id === editingBookId ? updatedBook : b));
      setBookList(newBookList);
      setEditingBookId(null);
      setInfo("Dodaj książkę");
    } else {
      const newBook: Book = {
        id: getLatesBookId(bookList) + 1,
        title,
        author,
        publishYear,
        rating,
        genre,
      };
      setBookList([...bookList, newBook]);
    }
    form.reset();
    setRating(0);
  }
      function handleDelete(book: Book): void {
        const newBookList = bookList.filter(b=>b.id !== book.id);
        setBookList(newBookList);
      }
      function handleUpdate(book: Book): void {
    setInfo("Edytuj książkę");
    setEditingBookId(book.id);
    if (titleRef.current) {
      titleRef.current.value = book.title;
    }
    if (authorRef.current) {
      authorRef.current.value = book.author;
    }
    if (publishDateRef.current) {
      publishDateRef.current.value = book.publishYear.toString();
    }
    if (ratingRef.current) {
      ratingRef.current.value = book.rating.toString();
      setRating(book.rating);
    }
    if (genreRef.current) {
      genreRef.current.value = book.genre;
    }
  }
  return (
    
    <>
      <h1 className='text-center mb-2'>Przegląd filmów</h1>
    <main className='d-flex gap-2'>
      <section className='w-50'>
        <h2>Formularz</h2>
        <form onSubmit={(e)=>handleSubmit(e)} ref={formRef}>
          <div className='mb-3'>
            <input type="text" name="title" placeholder='Tytuł książki' className='form-control' required ref={titleRef}/>
          </div>
          <div className='mb-3'>
            <input type="text" name="author" placeholder='Autor książki' className='form-control' required ref={authorRef}/>
          </div>
          <div className='mb-3'>
            <input type="text" name="year" placeholder='Rok wydania' className='form-control' required ref={publishDateRef}/>
          </div>
          <div>
            <label htmlFor="rating" id='ratingLabel'>Ocena książki: {rating}</label>
            <input type="range" name="rating" id="rating" className='form-range' min={0} max={5} step={1} defaultValue={0} onChange={e=>
              {
                setRating(parseInt(e.target.value));
              }
            } ref={ratingRef}/>
          </div>
          <div className='mb-3'>
            <select name="genre" className='form-select' ref={genreRef}>
              {genres.map((genre)=>(
                <option value={genre} key={genre}>{genre}</option>
              ))}
            </select>
          </div>
          <div className='mb-3'>
            <button type="submit" className='btn btn-primary col-2'>{info}</button>
          </div>
        </form>
      </section>
      <section className='w-50'>
        <h2>Ilość filmów na liście - {bookList.length}</h2>
        <table className='table table-success m-2'>
          <thead>
            <tr>
              <th>Lp.</th>
              <th>Tytuł</th>
              <th>Autor</th>
              <th>Rok Wydania</th>
              <th>Ocena</th>
              <th>Gatunek</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book)=>(
              <tr key={book.id}>
                <td>{lp++}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear}</td>
                <td>{book.rating}</td>
                <td>{book.genre}</td>
                <td>
                  <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(book)}
                    >
                      Usuń
                    </button>
                    <button
                      onClick={() => handleUpdate(book)}
                      className="btn btn-secondary"
                    >
                      Edytuj
                    </button>
                </td>
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
