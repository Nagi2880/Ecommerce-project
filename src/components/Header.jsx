import React from 'react';
import './Home.css';
export default function Header() {
    return (
        <header id="Header" className="d-flex align-items-center row col-md-12">
                <h1 className="col-md-3">Example</h1>
                <div className="d-flex col-md-6 ">
                    <input type="search" placeholder="Buscar producto" id="search-one" className=""></input>
                    <button type="button" onClick="" className="" id="search-button">
                        <i id="Search-icon" className="bi bi-search"></i>
                    </button>
                </div>
                <ul id="nav" className="d-flex align-items-center justify-content-around col-md-3">
                    <li><a href="/e">Ejemplo</a></li>
                    <li><a href="/e">Ejemplo 2</a></li>
                    <li><button type="button" id="Button-login" onClick={(e) => {e.preventDefault();window.location.href='/Login'}}>Login</button></li>    
                </ul>
        </header>
    )
}
