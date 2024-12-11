import { useState } from "react";
import Button from '../components/Button'
function FetchPost() {
    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [userName, setuserName] = useState('')
    const APIURL = 'https://jsonplaceholder.typicode.com/users'
   
    const payload= {
        name:name,
        email:email,
        username: userName
    }

const HandleSubmit= (e)=>{
    e.preventDefault()
    fetch(APIURL,{
        method: 'POST',
        headers: {
               'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
             },
        body: JSON.stringify(payload)
    })
}


  return (
    <div>
    <form>
        <label htmlFor="firstName">Name</label>
        <input type="text" name="firstName" value={name} onChange={(e)=> setName(e.target.value)}/>
        <br/>
        <label htmlFor="email">email</label>
        <input type="email" name="email" value={email} onChange={(e)=> setemail(e.target.value)}/>
        <br/>
        <label htmlFor="userName">userName</label>
        <input type="text" name="userName" value={userName} onChange={(e)=> setuserName(e.target.value)}/>
        <br/>
    </form>
    <Button Click={HandleSubmit}>Submit</Button>
    </div>
  );
}

export default FetchPost;
