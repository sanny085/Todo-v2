import React,{ useReducer, useEffect } from 'react'
import { Container } from 'reactstrap';

import TodoContext from './context/TodoContext';
import todoReducer from './context/reducer';
 
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import Watch from './components/Watch';
 
const Todo2 = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const localdata = localStorage.getItem('todos');
        return localdata ? JSON.parse(localdata) : [];
    });
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

    return (
     <>
      <TodoContext.Provider value={{ todos, dispatch }}>
         <Container fluid>
             <h1>What's Your Main Focus For Today</h1>
             <Watch/>
             <TodoForm/>
             <Todos/>
         </Container>
       </TodoContext.Provider>
     </>
    )
}

export default Todo2;

