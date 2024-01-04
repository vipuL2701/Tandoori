import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Slideshow.css';

const Slideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images]);

  return (
    <div className="slideshow-container">
      <TransitionGroup>
        <CSSTransition key={index} timeout={100} classNames="fade">
          <img
            className="slideshow-image"
            src={images[index]}
            alt={`Slide ${index + 1}`}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Slideshow;
