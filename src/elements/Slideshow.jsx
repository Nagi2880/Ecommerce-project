import './Slideshow.css';
const Slideshow = (props) =>{
    return(
       <div>
        <a href="/Novedad">
            <img src={props.imglink} alt={props.description}  id="carouselimage"/>  
        </a>
       </div>
    )
}
export default Slideshow