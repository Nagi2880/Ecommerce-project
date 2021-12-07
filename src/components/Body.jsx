import React from 'react'
import Carousel from '../elements/Carousel';
import Slidecard from '../elements/Slidecard';
export default function Body() {
    return (
        <div className="Body-Container">      
            <Carousel />
            <Slidecard Subtitle="Ejemplo de productos en oferta" />
        </div>
    )
}
