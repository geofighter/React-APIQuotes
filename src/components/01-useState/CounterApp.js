import React, { useState } from 'react'

export const CounterApp = () => {

    const [ state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const { counter1, counter2 } = state;

    return (
        <>
            <div className='container'>

                <h1> Counter1 { counter1 } </h1>
                <h1> Counter2 { counter2 } </h1>
                <hr></hr>
                <button 
                    className='btn-floating waves-effect waves-light indigo darken-4'
                    onClick={ () =>{
                        setState( 
                            {
                                ...state,
                                counter1: counter1 + 1
                            }
                         );
                    } }
                >
                    <i className="material-icons right">add_circle</i>
                </button>
            </div>
        </>
    )
}
