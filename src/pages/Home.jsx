import Button from '../components/Button'
import Navbar from '../components/Navbar'
import CountSuscribe from '../pages/CountSubscribe'

import { useState } from 'react'
const Home = ()=>{
const [name, setName]= useState("Smart")
const laptop= 'dell'
const example = 'send'
const example2 = 'click'
const HandleClick= (e)=>{
  e.preventDefault()
  alert('hey! I am clicked')
}
const HandleClick2= (e)=>{
  e.preventDefault()
  alert('hey! I am the second button')
}
const HandleName = (e)=>{
e.preventDefault()
setName("Victor")
}
  return(
    <div>
     
      <Navbar/>
      <CountSuscribe/>
      <h1 className="text-blue-300">{name}</h1>
      <h2>{laptop}</h2>
      <Button Click={HandleClick} className='button1'>{example}</Button>
      <Button Click={HandleClick2} className=''>{example2}</Button>
      <Button Click={HandleName} className='button1'>Click to view Name</Button>

    </div>
  )
}

export default Home
