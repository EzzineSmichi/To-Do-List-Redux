import { ADD, REMOVE, COMPLETE, EDIT, CHANGETONULL, CHANGETOTRUE, CHANGETOFALSE } from "./type";

const initialState = {
    todos : [
        {id : Math.random(), isComplete : true, name :'Learn HTML'}, 
        {id : Math.random(), isComplete : true, name : 'Learn CSS'},
        {id : Math.random(), isComplete : true, name : 'Learn JavaScript'},
        {id : Math.random(), isComplete : false, name : 'Learn ES6'},
        {id : Math.random(), isComplete : false, name : 'Learn React'},
        {id : Math.random(), isComplete : false, name : 'Learn Rdux'}
    ],
    done : null
}

// (state, action)=>{}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
               ...state, todos : [...state.todos, action.payload]
            }
        
        case REMOVE:
            return {
                ...state, todos : [
                    ...state.todos.filter(todo=>todo.id !== action.payload)
                ]
            }

        case COMPLETE:
            return {
                ...state, todos : [
                    ...state.todos.map(todo=>(todo.id === action.payload)? {...todo, isComplete:!todo.isComplete}:todo)
                ]
            }

        case EDIT:
            return {
                ...state, todos : [
                    ...state.todos.map(todo=>(todo.id === action.payload.id)? {...todo, name:action.payload.text} : todo )
                ]
            }

        case CHANGETONULL:
            return {
                ...state, done : null
            }

        case CHANGETOTRUE:
            return {
                ...state, done : true
            }

        case CHANGETOFALSE:
            return {
                ...state, done : false
            }

        default: return state
    }
}

export default reducer