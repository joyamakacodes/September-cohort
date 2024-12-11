import { useState } from "react";
import image1 from '../assets/beautiful-stylish-dark-skinned-girl-walks-sunny-summer-city.jpg';
import image2 from '../assets/beautiful-textural-teapot-blurred-background-cozy-home-interior.jpg'
function StateHooks() {
  const [boy, setBoy]= useState('Elvis')
  const [image, setImage] = useState(image1)
  const [count, setCount] = useState(0)
  const [showCount, setShowCount]= useState(false)
  const [room, setRoom]= useState(
    {
      wall: '',
      table: 0,
      tray:{
        fruit: 0,
        color: ''
      }
    }
  )
  
  const [pupils, setPupils] = useState([])

  const data= ['Smart ', 'Ifeanyi ', 'Israel ', 'Titi ', 'Victor ', 'Muhammed ', 'Geoffrey ', 'Elvis ']
const HandleBoy=(e)=>{
  e.preventDefault()
  setBoy('Geoffrey')
}
const HandleImage=(e)=>{
  e.preventDefault()
  setImage(image2)
}
const HandleCount=(e)=>{
  e.preventDefault()
  setCount(count + 1)
}
const HandleShowCount=(e)=>{
  e.preventDefault()
  setShowCount(!showCount)
}
const HandleObject=(e)=>{
  e.preventDefault()
  setRoom({
    ...room,
    wall: 'white',
    table: 2,
    tray:{
      fruit: 6,
      color: 'black'
    }
  })
}
const HandleArray =(e)=>{
  e.preventDefault()
  setPupils([data])
}

  return (
    <div>
    <div>
    <h3>Image state</h3>
    <img src={image} width={400}/>
    <button onClick={HandleImage}>Click image</button>
    </div>

    <div>
      <h3>name state</h3>
      <h2>{boy}</h2>
      <button onClick={HandleBoy}>Click to view</button>
    </div>
    <button onClick={HandleShowCount}>{showCount ? 'hide count' : "show count"}</button>

     {showCount && (
      <div>
      <h3>count state</h3>
        <h4>{count} </h4>
        <button onClick={HandleCount}>click count</button>
      </div>
     )}

     <div>
      <h3>Object State</h3>
      <div>
      <h2>Room Items</h2>
        <p>Wall: {room.wall}</p>
        <p>Table: {room.table}</p>
        <p>Tray fruits: {room.tray.fruit}</p>
        <p>Tray color: {room.tray.color}</p>

      </div>
      <button onClick={HandleObject}>click to view object</button>
     </div>
     <div>
      <h3>Array State</h3>
     <ul>
     {pupils.map((item, index)=>(
       <li key={index}>
       {item}
       </li> 
      ))}
     </ul>
     <button onClick={HandleArray}>click to view array</button>

     </div>
    </div>
  );
}

export default StateHooks;
