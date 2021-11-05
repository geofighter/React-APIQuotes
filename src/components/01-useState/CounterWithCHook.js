import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCHook = () => {

    const { state:counter, increment, decrement, clear } = useCounter();

    return (
        <>
            <div className='container row'>

                <h1> Counter With Hook: { counter } </h1>
                <hr></hr>
                <div className='col s4 m4 l4'>
                    <button onClick={ decrement } className='btn-floating waves-effect waves-light red darken-4'>
                        <i className="material-icons right">volume_down</i>
                    </button>
                </div>
                <div className='col s4 m4 l4'>
                    <button onClick={ clear } className='btn waves-effect waves-light grey'>
                    Clear<i className="material-icons right">block</i>
                    </button>
                </div>
                <div className='col s4 m4 l4'>
                    <button onClick={ increment } className='btn-floating waves-effect waves-light indigo darken-4'>
                        <i className="material-icons right">volume_up</i>
                    </button>
                </div>

            </div>
        </>
    )
}
