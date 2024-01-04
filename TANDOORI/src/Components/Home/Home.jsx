import React from 'react';
import './Home.css';
import Slideshow from './Slideshow';
import Pincode from './Pincode';
import Reservation from './Reservation';
import reserv from '../img/reserv.jpg';


function Home() {
  const images = [
   'https://d1e1kd3gffmhjg.cloudfront.net/banner/348_20230526065805_banner.png', 
   'https://d1e1kd3gffmhjg.cloudfront.net/banner/348_20230526065805_banner.png',
   'https://d1e1kd3gffmhjg.cloudfront.net/banner/348_20230526065724_banner.png',
     ]
  return (
    <>
      <Slideshow images={images} />
       <Pincode />
        <Reservation />
        
       
       
    </>
  )
}

export default Home