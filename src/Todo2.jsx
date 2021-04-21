import React,{ useReducer, useEffect } from 'react'
import { Container } from 'reactstrap';

import TodoContext from './context/TodoContext';
import todoReducer from './context/reducer';
 
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
 
const Todo2 = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], () =>{
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
             <h1>Todo App With Context API (useReducer)</h1>
             <Todos/>
             <TodoForm/>

         </Container>
       </TodoContext.Provider>
     </>
    )
}
export default Todo2;
