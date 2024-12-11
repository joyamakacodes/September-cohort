import axios from "axios";
import { useState, useEffect } from "react";
function AxiosGet() {
  const [data, setData] = useState([])
const APIURL = 'https://jsonplaceholder.typicode.com/users'
  useEffect(()=>{
    const FetchAxios= async()=>{
      try{
        const response= await axios.get (APIURL)

      setData(response.data)
      }catch(e){
        console.log(e)
      }
    }
    FetchAxios()
  }, [])
  // const EDITAPI= 'https://jsonplaceholder.typicode.com/comments'

  const HandleEdit=async(id)=>{
    try{
      const response= await axios.patch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    console.log(response)
    }catch(e){
      console.log(e)
    }
  }
  const HandleDelete = (id)=>{
  
    try{
      const response = axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
      console.log(response)
      console.log('heyyy')
    }catch(e){
      console.log(e)
    }
    
    }
  return (
    <div>
       <table>
        <thead>
            <tr>
            <th>S/N</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address city</th>
                <th>Company Name</th>
                <th>UserName</th>
                <th>Phone number</th>
                <th> website</th>
                <th></th>
               
            </tr>
        </thead>
        <tbody>
        {data.map((item, index)=>(
            <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
            <td>{item.company.name}</td>
            <td>{item.username}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td style={{display: "flex"}}>
            <button onClick={HandleEdit(item.id)}>Edit</button>
            <button onClick={HandleDelete(item.id)}>Delete</button>
            </td>



            </tr>
        ))}
        </tbody>
    </table>
    </div>
  );
}

export default AxiosGet;
