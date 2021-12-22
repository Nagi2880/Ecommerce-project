import React from 'react';
import Products from './Products';
import './Slidecard.css';
const Slidecard = (props) => {

    return (
        <div id="Maincard-container">    
            <h2>{props.Subtitle}</h2>
            <div id="slideCard-container" className="col-md-12" >
                
                <Products 
                linkimage="https://thotcomputacion.com.uy/wp-content/uploads/2021/04/hx-product-headset-cloud-2-wireless-rd-1-zm-lg39411_090153c4f2924ad3973d509cc8e0385f.jpg"
                productTitle="Auricular HyperX Cloud II Wireless"
                productprice="US$200" 
                extra="15% OFF" />
                <Products />
                <Products />
                <Products />
            
                <Products />
                <Products />
                <Products />
                <Products />
                <div id="Next-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="100%" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                </div>
            </div>
        </div>     
    )
}
export default Slidecard