import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');
  const [person, setPerson] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { name, date, time, number, person });
  };

  return (
    <div className="book-table-container">
      <h1 className='heading'>Reservation</h1>
       <div className='form'>
       <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder= "Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          className="in"
          placeholder= "Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          placeholder= "Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <label htmlFor="number">Phone Number:</label>
        <input
          type="text"
          id="number"
          placeholder='Phone Number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
       <lable htmlFor="person">Person Count</lable>
       <input
         type='text'
         id='person'
         placeholder='Persons Count'
         value={person}
         onChange={(e) => setPerson(e.target.value)}
         required
       />
        <button type="submit">Book Now</button>
      </form>
      </div>
    </div>
  );
};

export default Reservation;
