import {useRef} from 'react'
import type { SubmitEvent } from 'react'


type Props = {}

const FormRef = (props: Props) => {
    var firstNameRef = useRef<HTMLInputElement>(null);
    var lastNameRef = useRef<HTMLInputElement>(null);
    var ageRef = useRef<HTMLInputElement>(null);

    function handleSumbit(e:SubmitEvent<HTMLFormElement>):void {

        e.preventDefault();
    }
  return (
    <form onSubmit={(e)=>handleSumbit(e)}>
        <div className='row m-2'>
            <label htmlFor="firstName" className='col-3 text-end'>Imię</label>
            <input type="text" id="firstName" className='col-6' ref={firstNameRef}/>
        </div>
        <div className='row m-2'>
            <label htmlFor="lastName" className='col-3 text-end'>Nazwisko</label>
            <input type="text" id="lastName" className='col-6' ref={lastNameRef}/>
        </div>
        <div className='row m-2'>
            <label htmlFor="age" className='col-3 text-end'>Wiek</label>
            <input type="number" id="age" className='col-6' ref={ageRef}/>
        </div>
        <div className='row m-2'>
            <button type="submit" className='col-6 btn btn-primary offset-3'>Prześlij</button>
        </div>
    </form>
  )
}

export default FormRef;
