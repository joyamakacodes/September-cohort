import { useState, useEffect } from "react";
function Fetch() {
    const[data, setData] = useState([])
useEffect(()=>{
    try{
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then((data)=>setData(data))
    }catch(e){
        console.log(e)
    }

}, [])

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



            </tr>
        ))}
        </tbody>
    </table>
      
    </div>
  );
}

export default Fetch;
