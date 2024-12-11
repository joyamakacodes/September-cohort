import { useAllContext } from '../context/AllContext';
import { useNavigate } from 'react-router-dom';
function ContextExample() {
  const {count, setCount, name, setName} = useAllContext()
  const navigate = useNavigate()
  const handleCount=(e)=>{
e.preventDefault()
setCount(count + 1)
  }
  const HandleSubmit = (e)=>{
e.preventDefault()
navigate('/reuse')
  }
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleCount}>increment</button>
      <form onSubmit={HandleSubmit}>
        <label htmlFor='name'>First Name</label>
        <br/>
        <input name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <button type='submit'>submit</button>

      </form>
    </div>
  );
}

export default ContextExample;
