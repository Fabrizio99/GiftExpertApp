//import React, { useState,useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data:images,loading} = useFetchGifs(category);

    //const [images, setImages] = useState([])
    //con el [] como segundo argumento, hace que la función se ejecute cuando el componente se haya renderizado por primera vez
    /*useEffect(()=>{
        getGifs(category).then(imgs=>setImages(imgs));   
    },[category])*/

    //getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                {
                    images.map((img)=>(
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }                
            
            </div>
        </>
    )
}
