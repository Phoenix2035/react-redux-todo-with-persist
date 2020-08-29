import { combineReducers } from 'redux';
import todoReducer from "./ToDo/todo.reducer";



export default combineReducers({
    todo: todoReducer
})