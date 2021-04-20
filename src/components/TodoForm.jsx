import React, { useState, useContext } from "react";

import {
    Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText
} from "reactstrap";
import {v4} from 'uuid';

import TodoContext from '../context/TodoContext';
import {ADD_TODO} from "../context/action.types";

const TodoForm = () => {
   const [todoString, setTodoString] = useState(" ");
   const {dispatch } = useContext(TodoContext);
 
   const handleSubmit = e => {

     e.preventDefault();
     if(todoString === ""){
         return alert("Please Enter a Todo");
     }
     const todo1 = {
        todoString,
        id : v4()
     };
     dispatch({
         type: ADD_TODO,
         payload: todo1
     });

     setTodoString("");
   }
    return (
    <>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
      
      <InputGroup>
        <Input type="text" name="todo" id="todo" placeholder="Your Next Todo" value={todoString} onChange={e => (setTodoString(e.target.value)) }/>
    
        <InputGroupAddon addonType="prepend">
          <Button color="warning">Add</Button>
        </InputGroupAddon>
      </InputGroup>

      </FormGroup>
    </Form>
    </>
  )
}

export default TodoForm;
