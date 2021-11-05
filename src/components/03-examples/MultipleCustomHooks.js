import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, clear } = useCounter(1);

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    
    const { author, quote } = !!data && data[0];
    
    console.log(counter);
    // console.log(author, quote);


    return (
        <div className='container'>
            <h1> Frases de Breaking Bad! </h1>
            <hr></hr>

            {
                loading
                ?
                    (
                        <div className='card-panel teal darken-4 white-text center z-depth-4'>
                            <i className='animate__animated animate__flash material-icons circle teal large'>find_in_page</i>
                            {/* Loading.. */}
                        </div>
                    )
                :
                    (
                        <div className='card-panel blue darken-4 white-text center z-depth-4'>
                            <blockquote className='animate__animated animate__fadeInDown z-depth-5 card-panel indigo lighten-1 white-text flow-text center'>{ quote }</blockquote>
                            <i className="animate__animated animate__flash animate__slow material-icons small circle teal orange-text">person</i><span className="animate__animated animate__flash animate__slow title yellow-text"><b>Autor: </b> { author }</span>
                        </div>
                    )
            }

            <div className='row'>
                <div className='col s4 m4 m4 left'>
                    <button 
                        className='z-depth-4 btn btn-floating brown darken-2 waves-effect waves-orange'
                        onClick={ decrement }
                    >
                    <i className='material-icons'>navigate_before</i></button>
                </div>
                <div className='col s4 m4 m4 center'>
                    <button 
                        className='z-depth-4  btn btn-floating brown darken-2 waves-effect waves-orange'
                        onClick={ clear }
                    >
                    <i className='material-icons'>delete_sweep</i></button>
                </div>
                <div className='col s4 m4 l4'>
                    <button 
                        className='z-depth-4 right btn btn-floating brown darken-2 waves-effect waves-orange'
                        onClick={ increment }
                    >
                    <i className='material-icons'>navigate_next</i></button>
                </div>
            </div>
            

            
        </div>
    )
}
