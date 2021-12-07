import React from 'react';
import Products from './Products';
import './Slidecard.css';
const Slidecard = (props) => {
    return (
        <div id="slideCard-container" className="d-flex row col-md-12">
            <h2>{props.Subtitle}</h2>
            <Products />
            <Products />
            <Products />
            <Products />
         </div> 
    )
}
export default Slidecard