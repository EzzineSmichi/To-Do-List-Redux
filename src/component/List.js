import React from 'react'
import Todo from './Todo'
const List = ({todos}) => {
    return (
        <div style = {{display: 'flex',flexWrap:'wrap', alignContent: 'center', justifyContent : 'space-between', padding:'1rem 2rem'}}>
            {
                todos.map(todo => {
                    return (
                        <Todo key = {todo.id} todo = {todo}/>
                    )
                })
            }
        </div>
    )
}

export default List
