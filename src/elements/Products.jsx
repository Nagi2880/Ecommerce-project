import React from 'react';
import './Products.css';
const Products = () =>{
    return(   
       <div className="d-flex row col-md-1" id="product-container">
            <div id="image-container" className="row col-md-12">
                    <img src="../example1.jpg"alt="productimage" id="image-product" />
            </div>
            <ul>
                <li>Titulo del producto</li>
                <li>Precio del producto</li>
                <li>Ofertas</li>
            </ul>
        </div>
        
    );    
}
export default Products