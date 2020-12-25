import React from 'react';
import { Card, CardBody, CardTitle, Row, Col, Button } from 'reactstrap';
import ModalEdit from './ModalEdit'
import { useDispatch} from 'react-redux'
import { complete, remove } from '../Redux/actions'

const Todo = ({todo,  edit}) => {

    // const handleDelet = () => {
    //     remove(todo.id)
    // }

    const dispatch = useDispatch()


    // const handleComplete = () => {
    //     complete(todo.id)
    // }

    console.log(todo)

  return (
    <Row style={{border:'2px solid #000', backgroundColor:'#ccc', marginTop:'1rem'}}>
      <Col sm="6">
        <CardBody>
          <CardTitle tag="h1" style = {{textAlign : 'center', textDecoration : todo.isComplete && 'line-through'}}>{todo.name}</CardTitle>
        </CardBody>
        <CardBody style={{display:"flex"}}> 
            <ModalEdit buttonLabel="Edit" todo={todo} edit={edit}/>

            <Button color="warning" onClick = {()=>dispatch(complete(todo.id))} style={{margin:'1rem'}}>
                {todo.isComplete ? 'undo': 'complete'}
            </Button>

            <Button color="danger" onClick={()=>dispatch(remove(todo.id))} style={{margin:'1rem'}}>
                delete
            </Button>

        </CardBody>
      </Col>
    </Row>
  );
};


export default Todo
