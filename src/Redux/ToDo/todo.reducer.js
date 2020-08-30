import types from './todo.types'

const initialState = {
    todoList: [],
    search: ""
}

const todoReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case types.ADD_TO_DO:
            return {
                ...state,
                todoList: [...state.todoList, payload]
            }
        case types.DELETE_TO_DO:
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== payload)
            }
        default:
            return state
    }
}


export default todoReducer