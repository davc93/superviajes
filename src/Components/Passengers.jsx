import React, { useState } from 'react';
import './Passengers.css'
export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState('');

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }

  const goToTicket = () => {
    send('DONE')
  }

  const submit = (e) => {
    e.preventDefault();
    send('ADD', { newPassenger: value })
    changeValue('');
  }

  const { passengers } = state.context;

  return (
    <form onSubmit={submit} className='Passengers'>
      <h2 className='Passengers-title title'>Agrega a las personas con las que vas de aventura</h2>
      {passengers.map((person, idx) => <p className='text' key={`person-${idx}`}>{person}</p>)}
      <input 
        id="name" 
        name="name" 
        type="text" 
        placeholder='Escribe el nombre completo' 
        required 
        value={value} 
        onChange={onChangeInput}
      />
      <div className='Passengers-buttons'>
        <button 
          className='Passengers-add button-secondary btn--secondary'
          type="submit"
        >
          Agregar Pasajero
        </button>
        <button
          className='Passenger-pay button btn--primary'
          type="button"
          onClick={goToTicket}
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};