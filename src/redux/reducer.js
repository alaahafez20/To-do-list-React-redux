
const initialState = {
    todos : []
}

export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                todos: [...state.todos.filter((todo,i) => i !== action.payload)]
            }    
        default:
            return state
    }
}