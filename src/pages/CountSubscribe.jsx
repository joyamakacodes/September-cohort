/* eslint-disable react/prop-types */
import { Increment, Decrement, Reset } from "../actions/CountAction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function CountSuscribe({count, Increase, decrease, reset}) {
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
e.preventDefault()
navigate('/test')
    }
  return (
    <div>
    <p>{count}</p>
    <button onClick={Increase}>increase</button>
      <button onClick={decrease}>Decrease</button>
      <br />
      <button onClick={reset}>Reset</button>
<button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
const mapStateToProps=state=>({
  count: state.counts.count
})

const mapDispatchToProps = {
  Increase: Increment,
  decrease: Decrement,
  reset: Reset,
};

export default connect (mapStateToProps, mapDispatchToProps)(CountSuscribe)
