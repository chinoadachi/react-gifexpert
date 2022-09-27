import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    //el useEffect ejecuta efectos secundarios
    //efecto secundario: proceso a ejecutar cuando algo suceda
    useEffect( () => {
        getImages();
    }, [])

    return {
        images,
        isLoading,
    }

}
