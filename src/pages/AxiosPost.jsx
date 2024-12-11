import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
const AxiosPost=()=> {
const [name, setName]= useState("")
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")

const payload={
  name: name,
  username: username,
  email: email
}
const APIURL = 'https://jsonplaceholder.typicode.com/users'

  const HandleSubmit = async (e)=>{
e.preventDefault()
try{
 const response = await axios.post (APIURL, payload)
 console.log(response)
}catch(e){
console.log(e)
}
  }
  return (
    <div>
     <form>
     <label htmlFor="name">Name</label>
     <input name="name" type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
     <br/>
     <label htmlFor="username">Username</label>
     <input name="Username" type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
     <br/>
     <label htmlFor="email">Email</label>
     <input name="email" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
     <br/>
     </form>
     <Button Click={HandleSubmit}>Submit</Button>
    </div>
  );
}

export default AxiosPost;
