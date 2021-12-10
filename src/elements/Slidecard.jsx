import React from 'react';
import Products from './Products';
import './Slidecard.css';
const Slidecard = (props) => {
    return (
        <div id="slideCard-container" className="d-flex row col-md-12">
            <h2>{props.Subtitle}</h2>
            <Products 
            linkimage="https://thotcomputacion.com.uy/wp-content/uploads/2021/04/hx-product-headset-cloud-2-wireless-rd-1-zm-lg39411_090153c4f2924ad3973d509cc8e0385f.jpg"
            productTitle="Auricular HyperX Cloud II Wireless"
            productprice="US$200" 
            extra="15% OFF" />
            <Products />
            <Products />
            <Products />
         </div> 
    )
}
export default Slidecard