import axios from "axios"

export const listTodo=()=>(dispatch)=> {
    axios.get ('https://jsonplaceholder.typicode.com/todos')
    .then(Response =>
        console.log("listTodo action response: ", Response.data),
        dispatch({type:'GET_LIST_TODO',payload:Response.data}))
}
export const addTool =(data)=>{
    return{
        type: 'ADD_TODO',
        payload: data
    }
}
export const deleteTodo =(data)=>{
    return{
        type: 'DELETE_TODO',
        payload: data
    }
}