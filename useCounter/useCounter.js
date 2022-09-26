// un hook no es mas que una funcion
// una funcion siempre retorna a algo

import { useState } from "react"

export const useCounter = (initial_value = 10) => {
    
    const [counter, setCounter] = useState(initial_value);
    const increment = (value=1) =>{
        setCounter(counter+value);
    }
    const decrement = (value=1) =>{
        // if(counter===0) return;
        setCounter(counter-value);
    }
    const reset = () =>{
        setCounter(initial_value);
    }

    return{
        // Valor del cuerpo: parametro que devuleve mi funcion
        counter: counter,
        increment,
        decrement,
        reset,
    }
}

//! CUANDO DESEO DESESCTRUCTURAR UN OBJETO USO {}, PERO CUANDO LO HAGO ANTE UN ARREGLO, USO []
