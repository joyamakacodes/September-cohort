import { CarouselData } from "../data/CarouselData";
import { useState, useEffect } from "react";


function Carousel() {
  const [carousel, setCarousel] = useState(0)

useEffect(()=>{
  const render= setInterval(()=>{
    setCarousel(count=>(count +1) % CarouselData.length)
  }, 1000)
return ()=>clearInterval(render)
}, [])

  return (
    <div>
      <img src={CarouselData[carousel].image} width={500}/>
      <p>{CarouselData[carousel].title}</p>
    </div>
  );
}

export default Carousel;
