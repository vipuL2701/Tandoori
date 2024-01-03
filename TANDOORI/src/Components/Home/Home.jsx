import React from 'react';
import Slideshow from './Slideshow';

function Home() {
  const images = [
   'https://d1e1kd3gffmhjg.cloudfront.net/banner/348_20230526065805_banner.png', 
   'https://d1e1kd3gffmhjg.cloudfront.net/banner/348_20230526065805_banner.png',
   'https://d1e1kd3gffmhjg.cloudfront.net/banner/348_20230526065724_banner.png',
     ]
  return (
    <>
    <div className='photo'>
    <Slideshow images={images} />
    </div>
    </>
  )
}

export default Home