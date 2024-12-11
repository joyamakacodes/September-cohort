import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Card from './pages/Card';
import StateHooks from './components/StateHooks';
import './App.css'
import FormState from './components/FormState';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import BootstrapTest from './pages/BootstrapTest';
import BasicTable from './pages/MaterialUI';
import { AllContext } from './context/AllContext';
import ContextExample from './pages/ContextExample';
import ReuseContext from './pages/ReuseContext';
import Fetch from './pages/Fetch';
import FetchPost from './pages/FetchPost';
import AxiosGet from './pages/AxiosGet';
import AxiosPost from './pages/AxiosPost';
import CountTest from './pages/CountTest';
import TodoSubscribe from './pages/TodoSubscribe';
import TodoTest from './pages/TodoTest';
function App() {
 

  return (
    <>
    <AllContext>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/state' element={<StateHooks/>}/>
          <Route path='/form' element={<FormState/>}/>
          <Route path='/bootstrap' element={<BootstrapTest/>}/>
          <Route path='/basic' element={<BasicTable/>}/>
          <Route path='/context' element={<ContextExample/>}/>
          <Route path='/reuse' element={<ReuseContext/>}/>
          <Route path='/product' element={<Products/>}/>
          <Route path='/fetch' element={<Fetch/>}/>
          <Route path='/fetchp' element={<FetchPost/>}/>
          <Route path='/axiosget' element={<AxiosGet/>}/>
          <Route path='/axiospost' element={<AxiosPost/>}/>
          <Route path='/todo' element={<TodoSubscribe/>}/>
          <Route path='/todotest' element={<TodoTest/>}/>
          <Route path='/test' element={<CountTest/>}/>

          <Route path='/product/:detail' element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </AllContext>
      
    </>
  )
}

export default App
