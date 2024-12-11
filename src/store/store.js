import { combineReducers, createStore } from "redux";
import { CountReducer } from "../reducers/CountReducers";
import { TodosReducer } from "../reducers/TodoReducer";

const StoreCombined =combineReducers({
  counts: CountReducer,
  Todos: TodosReducer
})

export const store = createStore(StoreCombined)
