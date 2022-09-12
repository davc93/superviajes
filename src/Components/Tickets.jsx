import React from 'react';

export const Tickets = ({ send, context }) => {
  const finish = () => {
    send('FINISH')
  };

  return (
    <div className='Tickets'>
      <h2 className='Tickets-description description'>Gracias por volar con Super viajes</h2>
      <div className='Tickets-ticket'>
        <div className='Tickets-country'>Disfruta tu viaje a {context.selectedCountry}</div>
        <div className='Tickets-passengers'>
          {context.passengers.map((person, idx) => {
            return <p key={idx}>{person}</p>
          })}
        </div>
      </div>
      <button onClick={finish} className='Tickets-finalizar button btn--primary'>Finalizar</button>
    </div>
  );
}; 