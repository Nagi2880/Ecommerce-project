import React from 'react';
import './Products.css';
const Products = (props) =>{
   
    
    return(   
       <div className="col-md-1" id="product-container" ref={props.refe} >
            <div id="image-container" className="">
                    <img src={props.linkimage}alt="productimage" id="image-product" />
            </div>
            <ul className="description-container">
                <li id="productTitle">{props.productTitle}</li>
                <li id="productprice">{props.productprice}</li>
                <li id="extra">{props.extra}</li>
            </ul>
        </div>
        
    );    
}
export default Products