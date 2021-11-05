import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCHook = () => {
    
    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        passwd: ''
    });

    const { name, email, passwd } = formValues;
    
    useEffect( () => {
        console.log('email cambio')
    }, [ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <>  
            <div className='container'>
                <h1> Form With Custom Hook </h1>  
                <hr></hr>
    
                <div className='row card-panel blue lighten-5'>
                    <form onSubmit={ handleSubmit } className='col s12 m12 l12'>
                        <div className="input-field col s12 m12 l12">
                            <input 
                                id="nombre" 
                                type="text"
                                name='name'
                                className="validate purple-text text-darken-2"
                                value={ name }
                                onChange={ handleInputChange }
                            />
                            
                            <label htmlFor="nombre">Nombre</label>
                        </div>

                        <div className="input-field col s12 m12 l12">
                            <input 
                                id="email" 
                                type="email"
                                name='email'
                                className="validate purple-text text-darken-2"
                                value={ email }
                                onChange={ handleInputChange }
                            />
                            
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field col s12 m12 l12">
                        {/* <input id="password" type="password" class="validate" /> */}
          
                            <input 
                                id="password" 
                                type="password"
                                name='passwd'
                                className="validate purple-text text-darken-2"
                                value={ passwd }
                                onChange={ handleInputChange }
                            />
                            <label htmlFor="password">Contraseña</label>                        
                        </div>

                        <center>
                            <button type='submit' className='btn btn-floating indigo darken-4'>
                                <i className='large material-icons blue-text text-lighten-3'>save</i>
                            </button>
                        </center>

                    </form>

                </div>

            </div>
             
        </>
    )
}
