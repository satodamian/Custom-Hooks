import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initial_State = [];

// Permanece la informacion de mi formulario en el LS
const init = () =>{
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initial_State, init);

    // EFECTO SECUNDARIO PARA GUARDAR EN EL LOCAALSTORAGE
    // LOCALSTORAGE ES UN API DE JS
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


  //! AGREGAR TAREA
  
    const handleNewTodo=(todo)=>{
      // Creo mi accion en la cual describo su estructura
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        //Mando mi accion al reducer
        dispatch(action);   
      }
  
  //   //! ELIMINAR TAREA
    const handleDeleteTodo = (id) =>{
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }
  
    const handleToggleTodo = (id) =>{
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
        
    }
  

    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo)=>!todo.done).length,
    };
}
