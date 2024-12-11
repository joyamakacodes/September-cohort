import { ProductData } from "../data/ProductData";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
    {ProductData.map(({id,image,title, description, price})=>(
      <div key={id} style={{border: '1px solid gray'}}>
      <Link to={`/product/${id}`}>
      <img src={image} style={{width: '100%', height: '300px'}}/>
      <h3>{title}</h3>
      <p>{description.slice(0, 35)}...</p>
      <p>${price}</p>
      </Link>
      </div>
    ))}
  </div>
  );
}

export default Products;
