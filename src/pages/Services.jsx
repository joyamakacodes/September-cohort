import Layout from "../components/Layout"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

const Services = ()=>{
const navigate= useNavigate()


  const HandleClick= (e)=>{
e.preventDefault()
navigate('/contact')
  }

  return (
    <Layout>
    <div>
    This is service page
    <Button Click={HandleClick} ><h1>Sign up</h1></Button>
    </div>
    </Layout>
  )
}

export default Services
