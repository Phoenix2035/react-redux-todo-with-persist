import types from './todo.types'

const initialState = {
    todoList: [],
    search: ""
}

const todoReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case types.ADD_TO_DO:
            return {
                ...state,
                todoList: [...state.todoList, payload]
            }
        default:
            return state
    }
}


export default todoReducer