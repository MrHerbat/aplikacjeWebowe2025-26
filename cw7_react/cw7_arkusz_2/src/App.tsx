import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [count, setCount] = useState(0);
  const [key, setKey] = useState(0);
  
  return (
    <>
      <div id='left'>
        <form>
          <label htmlFor=""></label>
          <input type="number" name='key' id='key'/>
          <label htmlFor=""></label>
          <textarea name="text" id="text"></textarea>
          <button type="button" onClick={cezarCipher(
            setKey

          )}>Zakoduj</button>
        </form>
      </div>
      <div id='right'>
        <textarea name="coded" id="coded"></textarea>
      </div>
      
    </>
  )
}
function cezarCipher(text: string, shift: number): string {
  text.toLowerCase();  
  return text
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const isUpperCase = code >= 65 && code <= 90;
                // Oblicz nową pozycję, obsłuż ujemne przesunięcia
                return String.fromCharCode((code - shift) % 26 + 26);
            }
            return char; // Pozostaw znaki niebędące literami bez zmian
        })
        .join('');
}
export default App
