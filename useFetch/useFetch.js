import { useEffect, useState } from "react"


export const useFetch = (url) => {
  // UseSTATE
    const [state, setState] = useState({
      data: null,
      isLoading: true, /* Por defecto, esta cargando */
      hasError: null,
    });

    const getFetch = async() =>{
       
      // Cuando resuelvo otra peticion, meintras me carga el mensaje me tira
        setState({
          ...state,
          isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        // Todo sale BIEN, entonces llamo al SetState:
        
       setState({
            data,
            isLoading: false,
            hasError: null,
       })
    }

      useEffect(() => {
    getFetch();
  }, [url]);


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}




  



