import { useState } from "react";

export const useForm = (initial_Form = {}) => {

    const [formState, setFormState] = useState(initial_Form);

//   ! SI HACEMOS CAMBIOS EN EL STATE, MI PROCESO SE VOLVERA A DIBUJARLO
// FUNCIONES PARA EFECTUAR CAMBIOS DE CUALQUIER INPUT
 const onInputChange = ({target}) =>{
        // console.log(event.target.value)
//todo: Uso el valor parametro name porque este estas asignado dentro de mi funcion de mi F.Component
    const {value, name} = target;
    setFormState({
        ...formState,  
        [name] : value,  
    });
 }

 //RESET

 const onReset = () =>{
    // Asigno el valor total de mi formstate como intial_from
    setFormState(initial_Form);
 }

  return {
        ...formState, //Devulevo todos los valores por estado de formState
        formState,
        onInputChange,
        onReset,
  }
}
