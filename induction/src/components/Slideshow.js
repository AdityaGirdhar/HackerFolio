//import img1 from '../assets/Speaker1.png';
//import img2 from '../assets/Speaker2.png';
//import img3 from '../assets/Speaker3.png';
import {useRef} from 'react';
import {useEffect} from 'react';
import '../flickity/flickity.min.css';
import './scss/slideshow.scss';
import Flickity from '../flickity/flickity.pkgd.js';

const Slideshow = (props) => {
  const slideshow = useRef(null);

  useEffect(() => {
    let flick = new Flickity(slideshow.current, {
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      autoPlay: props.slideTime,
      pageDots: false
    });
  });

  // data-flickity='{ "cellAlign": "center", "contain": true, "wrapAround": true, "autoPlay": true, "pageDots": false }'
  return (
    <div className="slideshow">
      <div ref={slideshow} className="carousel js-flickity">
        {/*<div className="carousel-cell">
            <img src={img1} alt="speaker" />
          </div>
          <div className="carousel-cell">
            <img src={img2} alt="speaker" />
          </div>
          <div className="carousel-cell">
            <img src={img3} alt="speaker" />
          </div>*/}
        {props.items.map(item => (
          <div className="carousel-cell">
            <img src={require('../assets/' + props.prefix + item.split(' ').join('-').toLowerCase() + '.jpg')} alt="member photo"/>
            {props.name ? <span>{item.includes("Mohit Bansal") ? item.slice(0, item.length - 2) : item}</span> : null}
          </div>
        ))}
        </div>
    </div>
  )
}

export default Slideshow;
