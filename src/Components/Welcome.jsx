import React from 'react';

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send('START');
  };

  return (
    <div className='Welcome'>
      <h2 className='Welcome-title title'>Encuentra la aventura de tu vida</h2>
      <p className='Welcome-description description'>Sigue adelante y viaja junto a quien quieras a tu destino favorito, nosotros nos encargamos del resto</p>
      <button onClick={startBooking} className='btn--primary'>Comenzar</button>
    </div>
  );
}; 