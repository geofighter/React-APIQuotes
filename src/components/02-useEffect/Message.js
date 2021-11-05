import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coordenadas, setCoordenadas] = useState({ x:0, y:0 });

    const { x, y } = coordenadas;
 
    useEffect(() => {

        // console.log('componente montado');

        const mouseMove = (e) => {
            const coordenadas = { x: e.x, y:e.y };
            setCoordenadas( coordenadas );
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('componente Desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3> Este es un mensaje para tí si te llamas Geo.. xD </h3>
            <p>
                X:{ x } Y:{ y }
            </p>
        </div>
    )
}
