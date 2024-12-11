
const initialState = {
  todos: []
};

export const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVETODO':
      return { ...state, todos: state.todos.filter((_, index) => index !== action.payload) };
    default:
      return state;
  }
};

