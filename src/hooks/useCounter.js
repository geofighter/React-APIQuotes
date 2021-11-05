import { useState } from 'react';


export const useCounter = ( initialState = 0) => {
    
    let [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
        //Programado para evitar que el contador siga decrementando si llega a cero
        if( counter <= initialState ){
            setCounter( initialState );
        }
    }

    const clear = () => {
        setCounter( initialState );
    }

    return {
        counter, 
        increment, 
        decrement,
        clear
    };

}
