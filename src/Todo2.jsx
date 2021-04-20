import React,{ useReducer } from 'react'
import { Container } from 'reactstrap';

import TodoContext from './context/TodoContext';
import todoReducer from './context/reducer';


const Todo2 = () => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    return (
        <>
        <TodoContext.Provider value={{ todos, dispatch }}>
         <Container fluid>
             <h1>Todo App With Context API (useReducer)</h1>
         </Container>
        </TodoContext.Provider>
        </>
    )
}

export default Todo2;
