import {useState} from 'react';
import Carousel from './Carousel';
function FormState() {
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName] = useState("")

  const [object, setObject] = useState({
    firstname: '',
    surname: ''
  })

  const HandleDetails=(e)=>{
    e.preventDefault()
    setObject({
      ...object,
      firstname: firstName,
      surname: lastName
    })
  }
  return (
    <div>
      <form onSubmit={HandleDetails}>
        <label htmlFor='firstname'>First Name</label>
        <input name='firstname' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
        <br/>
        <label htmlFor='lastname'>Last Name</label>
        <input name='lastname' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
      <p>First Name: {object.firstname}</p>
      <p>Last Name: {object.surname}</p>
      <Carousel/>
    </div>
  );
}

export default FormState;
