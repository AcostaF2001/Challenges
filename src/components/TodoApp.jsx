import React, { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "./intro-reducer";
import { TodoAdd } from "./TodoAdd";
import { Todolist } from "./Todolist";


const initialState=[{
    id:new Date().getTime(),
    description:'Hacer los Challenges',
    done:false
}]

const init =()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp=()=>{
    const [todos,dispatch]=useReducer(todoReducer,initialState,init)

    useEffect(() =>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const handleNewTodo =(todo)=>{
        console.log( 'hola ');
        const action={
            type:'[TODO] ADD TODO',
            payload:todo
        }
        dispatch(action)
    }
    return(
        <>
        <h1>TodoApp:10,<small>pendientes:2</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <Todolist todos={todos}/>
            </div>
            <div className="cel-5">
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>

        </div>
        </>
    )
}