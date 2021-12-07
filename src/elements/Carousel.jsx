import React,{ useRef,useEffect } from 'react';
import styled from 'styled-components';
import Slideshow from './Slideshow';

const Carousel  = () => {
  
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);
  
  const Siguiente = () => {
    console.log('Siguiente')
    //Creamos un condicional tal que verifiquemos si el carousel tiene elementos
    if(slideshow.current.children.length > 0){
      //Primer articulo del carousel  
      const firstelement = slideshow.current.children[0];  
        //Establezco la transicion para el carousel
      slideshow.current.style.transition = `300ms ease-out all`;
      //Movemos el carousel
      slideshow.current.style.transform =`translateX(-2000px)`;
     
      const transition = () =>{
        slideshow.current.style.transition =`none`;
        slideshow.current.style.transform =`translateX(0)`;
      
        slideshow.current.appendChild(firstelement);
      
        slideshow.current.removeEventListener('transitionend',transition);

      }
      
      slideshow.current.addEventListener('transitionend', transition);



    }
  };
  const Anterior = () => {
    console.log('Anterior');

    if(slideshow.current.children.length > 0){
      const index = slideshow.current.children.length - 1;
      const lastelement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastelement, slideshow.current.firstChild); 

      slideshow.current.style.transition = 'none';
      slideshow.current.style.transform = 'translateX(-2000px)';

      setTimeout(() =>{
        slideshow.current.style.transition = '300ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      },30);
    }
  };

  useEffect(() =>{
    intervaloSlideshow.current = setInterval(() => {
      Siguiente();
  },5000);

  slideshow.current.addEventListener('mouseenter', () => {
    clearInterval(intervaloSlideshow.current);
  })

    slideshow.current.addEventListener('mouseleave', () => {
      intervaloSlideshow.current = setInterval(() => {
      Siguiente()
    },5000);
    });
  },[]);


  return (
    <MainContainer>
      <ContenedorSlide ref={slideshow}>  
        <Slideshow imglink="../example1.jpg" description="this is the example 1" />
        <Slideshow imglink="../example2.jpg" description="" />
        <Slideshow imglink="../example3.jpg" description="" />
      </ContenedorSlide> 
      <Arrowbutton>
        <Botonslide Izquierdo onClick={Anterior}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="100%" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></Botonslide>
        <Botonslide Derecho onClick={Siguiente}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="100%" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></Botonslide>
      </Arrowbutton>
    
    </MainContainer>

  
  )
}


//stilos del styled
const MainContainer = styled.div`
position:relative;
max-width: 100%;
overflow: hidden;
`;
const Arrowbutton = styled.div`
  position:absolute;
  top:0px;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
const Botonslide= styled.div`
pointer-events: all;
background: none;
border: none;
cursor: pointer;
outline: none;
width: 50px;
height: 100%;
text-align: center;
position: absolute;
transition: .3s ease all;
&:hover{
  background: rgba(0,0,0,.2);
  path{
    fill: #fff;
  }
}

${props => props.Derecho ? 'right: 0' :'left:0'}

`;

const ContenedorSlide = styled.div`
display: flex;
flex-wrap:nowrap;
`;
export default Carousel