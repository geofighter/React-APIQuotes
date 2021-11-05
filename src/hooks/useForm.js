// CUSTOM HOOK PARA MANEJAR LA LÓGICA DE LOS FORMULARIOS
import { useState } from "react";

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);
    
    const handleInputChange = ({ target }) => {
    
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange ];

}
