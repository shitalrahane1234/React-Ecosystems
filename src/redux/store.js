import { combineReducers, createStore } from 'redux';
import { NewTodoForm } from './Reducer/NewTodoForm';
const reducers = { todos: NewTodoForm };
const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer);
