import React, { useState } from 'react';
import './Pincode.css';

const PinCodeForm = () => {
  const [pinCode, setPinCode] = useState('');
  const [result, setResult] = useState(null);

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const deliveryPinRange = [110001, 110002, 110003, 110004];
    const isDelivery = deliveryPinRange.includes(Number(pinCode));

    setResult({
      pinCode: pinCode,
      isDelivery: isDelivery,
    });
  };

return (
   <div className='search'>
     <h2 className='text'>ORDER NOW</h2>
      <div className='border'>
       <form onSubmit={handleSubmit}>
         <label>
          <b>Pin Code:</b>
          <input
            type="text"
            className='round'
            placeholder=" Please Enter Your Postal Code Here."
            value={pinCode}
            onChange={handlePinCodeChange}
            maxLength={6}
          />&nbsp;
          <button type="submit" className='button'>DELIVERY</button>&nbsp;
          <button type="submit" className='button1'>TAKEWAY</button>
        </label>
       </form>
      </div>
      {result && (
        <div>
          <h4>Result:</h4>
          <p>Pin Code: {result.pinCode}</p>
          {result.isDelivery ? (
            <p>Delivery is possible!</p>
          ) : (
            <p>Delivery is not possible for this pin code.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PinCodeForm;
