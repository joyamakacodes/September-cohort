import { CardData } from "../data/CardData";
function Card() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      {CardData.map(({image,title, description, price}, index)=>(
        <div key={index} style={{border: '1px solid gray'}}>
        <img src={image} style={{width: '70%'}}/>
        <h3>{title}</h3>
        <p>{description.slice(0, 35)}...</p>
        <p>${price}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
