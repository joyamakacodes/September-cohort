import Layout from "../components/Layout"
import { CardData } from "../data/CardData"

const About = ()=>{
  return(
    <Layout>
    <div>
   {CardData.map((data,index)=>(
    <div key={index}>
      <img src={data.image} alt="picture" style={{width: '80%'}}/>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <h4>${data.price}</h4>
    </div>
   ))}
    </div>
    </Layout>
  )
}

export default About