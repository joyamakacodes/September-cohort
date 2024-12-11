/* eslint-disable react/prop-types */
import { connect } from "react-redux";
function TodoTest({todos}) {
  return (
    <div>
     <ul>
     {todos.map((todo, index)=>(
      <li key={index}>
      <p>{todo}</p>
      </li>
      ))}
     </ul>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    todos: state.Todos.todos
  }
}
export default connect (mapStateToProps)(TodoTest)