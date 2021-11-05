import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;
    
    useEffect( () => {
        // console.log('hey');
    }, []);

    //escucha los cambios en el formulario completo
    useEffect( () => {
        // console.log('formState cambió');
    }, [formState]);

    //escucha los cambios en el input de email
    useEffect( () => {
        // console.log('input email cambió');
    }, [email]);
    
    const handleInputChange = ({ target }) => {
        // console.log(target.name, target.value);
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>  
            <div className='container'>
                <h1> useEffect </h1>  
                <hr></hr>
    
                <div className='row'>
                    <form className='col s12 m12 l12'>
                        <div className="input-field col s6 m6 l6">
                            <input 
                                id="nombre" 
                                type="text"
                                name='name'
                                className="validate"
                                value={ name }
                                onChange={ handleInputChange }
                            />
                            
                            <label htmlFor="nombre">Nombre</label>
                        </div>

                        <div className="input-field col s6 m6 l6">
                            <input 
                                id="email" 
                                type="email"
                                name='email'
                                className="validate"
                                value={ email }
                                onChange={ handleInputChange }
                            />
                            
                            <label htmlFor="email">Email</label>
                        </div>
                    </form>

                    { ( name === 'Geo' ) && <Message />}

                </div>

            </div>
             
        </>
    )
}
