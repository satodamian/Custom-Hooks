//  funcion pura de js

export const todoReducer = (initial_State=[], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initial_State, action.payload ]

        case '[TODO] Remove Todo':
            return initial_State.filter((todo)=> todo.id!==action.payload);
        
        case '[TODO] Toggle Todo':
            return initial_State.map((todo)=>{
                if(todo.id===action.payload){ //id del todo: action.payload
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })

        default:
            return initial_State;
    }
}
