import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonGroup, Button } from 'reactstrap'
import List from './List';
import FormAdd from './FormAdd'
import { changeToFalse, changeToNull, changeToTrue } from '../Redux/actions';


const MainToDo = () => {

    // const [todos, setTodos] = useState([
    //     {id : 0, isComplete : true, name :'Learn HTML'}, 
    //     {id : 1, isComplete : true, name : 'Learn CSS'},
    //     {id : 2, isComplete : true, name : 'Learn JavaScript'},
    //     {id : 3, isComplete : false, name : 'Learn ES6'},
    //     {id : 4, isComplete : false, name : 'Learn React'},
    //     {id : 5, isComplete : false, name : 'Learn Rdux'}
    //   ])

    //   const [done, setDone] = useState(null)

    // const add = newTodo => {
    //     setTodos([...todos, {id : Math.random(),isComplete : false, name : newTodo}])
    // }


    // const remove = index => {
    //     setTodos(todos.filter(todo=>todo.id !== index))
    // } 

    // const complete = index => {
    //     setTodos(todos.map(todo =>todo.id === index? {...todo,isComplete:!todo.isComplete}:todo))
    //   }
    
    // const edit = (id, text) => {
    //     setTodos(todos.map(todo=> todo.id===id ? {...todo, name:text} : todo))
    // }
    
    const todos = useSelector(state => state.todos)
    const done = useSelector(state => state.done)
    const dispatch = useDispatch()

    const search = () => {
        return (done !==null)? todos.filter(todo=>todo.isComplete === done): todos
    }


    return (
        <div>
            <ButtonGroup>
                <Button color="success" onClick={() => dispatch(changeToTrue())} >Done</Button>
                <Button color="danger" onClick={() => dispatch(changeToFalse())} >Not Done</Button>
                <Button color="primary" onClick={() => dispatch(changeToNull())}>All</Button>
            </ButtonGroup>

            {console.log(done)}
            <FormAdd  />
            <List todos = {search()} />
            {/* <List todos = {search()} remove = {remove} complete = {complete} edit = {edit} />  */}
        </div>
    )
}

export default MainToDo
