import types from './todo.types'

const initialState = {
    todoList: []
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
        case types.DONE_TOGGLE:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id === payload) {
                        item.done = !item.done
                        return item
                    } else
                        return item
                })
            }
        case types.UPDATE_TO_DO:
            return {
                ...state,
                todoList: state.todoList.map(item => item.id === payload.id ? {
                    id: payload.id,
                    done: false,
                    text: payload.text
                } : item)
            }
        default:
            return state
    }
}


export default todoReducer