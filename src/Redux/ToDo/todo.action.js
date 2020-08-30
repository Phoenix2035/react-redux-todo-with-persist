import types from './todo.types'


export const addTodo = (todo) => {
    return {
        type: types.ADD_TO_DO,
        payload: todo
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: types.DELETE_TO_DO,
        payload: todoId
    }
}

export const doneToggle = (todoId) => {
    return {
        type: types.DONE_TOGGLE,
        payload: todoId
    }
}




