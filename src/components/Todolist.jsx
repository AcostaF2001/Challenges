import React from "react";
import { Todoitem } from "./Todoitem";

export const Todolist = ({todos=[]}) =>{
    return(
        <>
        <ul className="list-group">
            {
                todos.map((todo,key)=>{
                    return(
                        <Todoitem key={key} todo={todo}/>
                    )
                })
            }
        </ul>
        </>
    )
}