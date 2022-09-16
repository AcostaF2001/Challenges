// const initialstate =[{
//     id:1,
//     todo:'Hacer los challenges',
//     done:false
// }]

// const todoReducer = (state= initialstate,action={}) => {
//     if(action.type==='[TODO] add todo'){
//         return[...state,action.payload]
//     }
//     return state;

// }

// let todos=todoReducer();
// const newTodo={
//     id:2,
//     todo:'Avance del proyecto',
//     done:false
// }

// const addTodoAction ={
//     type:'[TODO] add todo',
//     payload:newTodo,
// }

// todos = todoReducer(todos, addTodoAction)

// console.log(todos);
export const todoReducer=(initialState,action)=>{
    switch(action.type){
        case '[TODO] ADD TODO':
            return[...initialState, action.payload]
            break;
        default:
            return initialState;
    }
}