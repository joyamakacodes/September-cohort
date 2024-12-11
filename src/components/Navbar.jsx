import { NavData } from "../data/NavData"
import { Link } from "react-router-dom"
const Navbar = ()=>{
  
    
    return(
        <ul style={{display: 'flex', justifyContent: 'end', gap: '10px'}}>
           {NavData.map(({link,name}, index)=>(
            <li key={index} style={{listStyle: 'none'}}>
            <Link to={link}>{name}</Link>
            </li>
           ))}
        </ul>
    )
}

export default Navbar