import React, { useState, useContext } from "react";

import {
    Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText
} from "reactstrap";
import {v4} from 'uuid';

import TodoContext from '../context/TodoContext';
import {ADD_TODO} from "../context/action.types";

const TodoForm = () => {
   const [todoString, setTodoString] = useState("");
   const { dispatch } = useState(TodoContext);

   const handleSubmit = e =>{
     e.preventDefault();
     if(todoString === ""){
         return alert("Please Enter a Todo");
     }
     const todo = {
        todoString,
        id : v4()
     };
     dispatch({
         type : ADD_TODO,
         payload : todo
     })

     setTodoString("");
   
   }
    return (
    <>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
      
      <InputGroup>
        <Input type="text" name="todo" value={todoString} onChange={e =>{setTodoString(e.target.value)}} id="todo" placeholder="Your Next Todo"/>
    
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
