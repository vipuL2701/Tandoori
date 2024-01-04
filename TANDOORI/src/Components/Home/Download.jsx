import React from 'react'
import and from '../img/playstore.png';
import apple from '../img/appstore.png';
import phone from '../img/app_view.png';
import './Download.css';
function Download() {
  return (
    <div className='down'>
        <span>Download the TandooriRestaurant app</span><br />
        <span>Click, sit back and enjoy.</span> 
       <div className='but'>
          <button type='button'
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href="https://play.google.com/store/apps/details?id=de.tandorires.tandorires";
                  }}><img src={and} className='and' /></button>&nbsp;
          <button type='button'
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href="https://apps.apple.com/us/app/tandoori-restaurant/id1547458793"; 
                  }}><img src={apple} className='apple' /></button>
       </div>
     <img src={phone} className='phone' /> 
    </div>
  )
}

export default Download