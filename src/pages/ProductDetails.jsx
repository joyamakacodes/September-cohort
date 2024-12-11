import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductData } from "../data/ProductData";
function ProductDetails() {
  const [details, setDetails] = useState({})
  const{detail}= useParams()
useEffect(()=>{
  const display= ProductData.find((data)=> data.id === parseInt(detail)) 
  if(display){
    setDetails(display)
  }
}, [detail])

  return (
    <div>
      <img src={details.image} alt="product" width={400}/>
      <h2>{details.title}</h2>
      <p>{details.description}</p>
    </div>
  );
}

export default ProductDetails;
