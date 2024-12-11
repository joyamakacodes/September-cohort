/* eslint-disable react/prop-types */
import { Addtodo, RemoveTodo } from "../actions/TodoActions";
import { connect } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TodoSubscribe = ({ todos, adding, removal }) => {
  const [inputs, setInputs] = useState('');
const navigate = useNavigate()
  const HandleAdd = (e) => {
    e.preventDefault();
    if (inputs) {
      adding(inputs);
      setInputs('');
    }
  };
const handlenav=()=>{
  navigate('/todotest')
}

  return (
    <div>
      <form onSubmit={HandleAdd}>
        <label htmlFor="input">Add Todo</label>
        <input type="text" name="input" value={inputs} onChange={(e) => setInputs(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <div>
        <ul style={{textDecoration:  'none'}}>
          {todos.map((list, index) => (
            <li key={index} style={{display: 'flex', gap: '10px', justifyContent: 'between', alignItems: 'center'}}>
              <p>{index +1}</p>
              <p>{list}</p>
              <button style={{ color: 'red' }} onClick={() => removal(index)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handlenav}>go to</button>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.Todos.todos
  };
};

const mapDispatchToProps = {
  adding: Addtodo,
  removal: RemoveTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoSubscribe);